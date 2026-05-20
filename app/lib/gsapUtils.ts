/**
 * Shared GSAP utilities for WB Digital
 * Registers ScrollTrigger once, exports helpers.
 */
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let registered = false

export function registerGSAP() {
  if (registered || typeof window === 'undefined') return
  gsap.registerPlugin(ScrollTrigger)
  registered = true
}

/** Split a string into individual word <span> elements */
export function splitWords(text: string): string {
  return text
    .split(' ')
    .map(w => `<span class="gsap-word" style="display:inline-block;overflow:hidden;vertical-align:bottom"><span class="gsap-word-inner" style="display:inline-block">${w}</span></span>`)
    .join(' ')
}

export { gsap, ScrollTrigger }
