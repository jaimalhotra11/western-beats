'use client'
import dynamic from 'next/dynamic'

/**
 * Thin client-component shell so we can use { ssr: false } with
 * next/dynamic — that flag is not allowed in Server Components.
 * Rendering the Loader only on the client prevents the framer-motion
 * hydration mismatch that used to make the splash screen vanish.
 */
const Loader = dynamic(() => import('./Loader'), { ssr: false })

export default function ClientLoader() {
  return <Loader />
}
