'use client'
import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'

export default function Section({ children, className }: any) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <section
      ref={ref}
      className={`${className} snap-center flex h-[101vh] w-screen justify-start overflow-hidden p-12`}
    >
      <motion.span
        initial={{ y: '10%', opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: '10%' }}
        transition={{ delay: 1, duration: 0.8, ease: 'easeInOut' }}
      >
        {children}
      </motion.span>
    </section>
  )
}
