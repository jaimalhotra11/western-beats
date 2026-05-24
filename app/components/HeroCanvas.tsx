'use client'
import { useEffect, useRef } from 'react'

/**
 * Three.js floating particle field for the hero section.
 * Renders a dense field of small dots that drift slowly and
 * respond to mouse movement, subtle, not distracting.
 */
export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const canvas = canvasRef.current
    if (!canvas) return

    let THREE: typeof import('three')
    let renderer: import('three').WebGLRenderer
    let scene: import('three').Scene
    let camera: import('three').PerspectiveCamera
    let particles: import('three').Points
    let animId: number
    let mouse = { x: 0, y: 0 }
    let target = { x: 0, y: 0 }

    const onMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMove)

    ;(async () => {
      THREE = await import('three')

      // Renderer
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setClearColor(0x000000, 0)

      // Scene + camera
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200)
      camera.position.z = 60

      // Particle geometry
      const COUNT = 1800
      const positions = new Float32Array(COUNT * 3)
      const velocities = new Float32Array(COUNT * 3)
      const sizes = new Float32Array(COUNT)

      for (let i = 0; i < COUNT; i++) {
        positions[i * 3]     = (Math.random() - 0.5) * 160
        positions[i * 3 + 1] = (Math.random() - 0.5) * 90
        positions[i * 3 + 2] = (Math.random() - 0.5) * 60
        velocities[i * 3]     = (Math.random() - 0.5) * 0.008
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.005
        velocities[i * 3 + 2] = 0
        sizes[i] = Math.random() * 1.5 + 0.5
      }

      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

      // Custom shader material: crisp round dots, no blurry sprites
      const mat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: {
          uTime:   { value: 0 },
          uMouse:  { value: new THREE.Vector2(0, 0) },
        },
        vertexShader: `
          attribute float size;
          uniform float uTime;
          uniform vec2 uMouse;
          varying float vAlpha;

          void main() {
            vec3 pos = position;
            // Slow organic drift
            pos.x += sin(uTime * 0.18 + pos.y * 0.04) * 0.6;
            pos.y += cos(uTime * 0.14 + pos.x * 0.03) * 0.4;

            // Subtle mouse parallax
            pos.x += uMouse.x * (pos.z * 0.04 + 0.5);
            pos.y += uMouse.y * (pos.z * 0.03 + 0.3);

            vec4 mv = modelViewMatrix * vec4(pos, 1.0);
            gl_Position = projectionMatrix * mv;
            gl_PointSize = size * (180.0 / -mv.z);

            float depth = (pos.z + 30.0) / 60.0;
            vAlpha = clamp(depth * 0.55 + 0.15, 0.1, 0.55);
          }
        `,
        fragmentShader: `
          varying float vAlpha;
          void main() {
            float d = length(gl_PointCoord - 0.5);
            if (d > 0.5) discard;
            float alpha = (1.0 - d * 2.0) * vAlpha;
            // Mix WB blue with a hint of crimson for depth
            vec3 col = mix(vec3(0.04, 0.39, 0.76), vec3(0.77, 0.07, 0.19), vAlpha * 0.3);
            gl_FragColor = vec4(col, alpha * 0.7);
          }
        `,
      })

      particles = new THREE.Points(geo, mat)
      scene.add(particles)

      // Resize handler
      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }
      window.addEventListener('resize', onResize)

      // Animate
      let t = 0
      const animate = () => {
        animId = requestAnimationFrame(animate)
        t += 0.01

        // Lerp mouse
        target.x += (mouse.x - target.x) * 0.04
        target.y += (mouse.y - target.y) * 0.04

        mat.uniforms.uTime.value = t
        mat.uniforms.uMouse.value.set(target.x, target.y)

        // Very slow overall rotation
        particles.rotation.y = t * 0.008
        particles.rotation.x = t * 0.004

        renderer.render(scene, camera)
      }
      animate()

      // Cleanup
      return () => {
        window.removeEventListener('resize', onResize)
      }
    })()

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
      if (renderer) renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.65 }}
      aria-hidden
    />
  )
}
