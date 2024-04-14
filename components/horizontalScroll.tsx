"use client"
import { useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function HorizontalScrollCarousel({ children }: any) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);
  console.log('x', x);

  return (
    <section ref={targetRef} className='relative left-0 h-[300vh] bg-blue-800'>
      <div className='sticky top-0 left-0 flex h-screen items-center overflow-hidden'>
        <AnimatePresence>
          <motion.div
            key={children.key}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ x }}
            className='flex'
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
