"use client"
import { useEffect, useRef, useState } from 'react';
import styles from "./index.module.css";

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLUListElement>(null);

  let count = 3;
  let current = 0;
  let animation_state = false;
  
  const gotoNum = (index: number) => {
    const pages = pageRef.current?.children;
    const btns = paginationRef.current?.children;

    if (pages && index !== current && !animation_state) {
      animation_state = true;
      setTimeout(() => (animation_state = false), 500);

      for (let i = 0; i < count; i++) {
        const slide = pages[i] as HTMLElement;
        slide.style.transition = "bottom 0.7s ease-in-out";
        slide.style.bottom = (index - i) * 100 + '%';
      }
      current = index;
      console.log('current', current);
    }
  };

  const gotoNext = () => (current < count - 1 ? gotoNum(current + 1) : false);
  const gotoPrev = () => (current > 0 ? gotoNum(current - 1) : false);
  const btnClick = (e: any) => gotoNum(parseInt(e.target.dataset.slide));

  useEffect(() => {

    const handleWheel = (e: WheelEvent) => {
      e.deltaY < 0 ? gotoPrev() : gotoNext();
    };

    pageRef.current?.addEventListener('wheel', handleWheel);

    return () => {
      pageRef.current?.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <>
      <div className={styles.main_container} ref={pageRef}>

        {/* 1st */}
        <div className={styles.page}>
          {/* Write Code */}
        </div>

        {/* 2st */}
        <div className={styles.page}>
          {/* Write Code */}
        </div>

        {/* 3st */}
        <div className={styles.page}>
          {/* Write Code */}
        </div>

      </div>
    </>
  );
}