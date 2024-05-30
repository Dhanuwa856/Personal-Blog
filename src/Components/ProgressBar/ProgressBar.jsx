import React, { useEffect, useRef } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ percentage }) => {
  const barRef = useRef(null);

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (barRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !didCancel) {
            barRef.current.style.width = `${percentage}%`;
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(barRef.current);
    }

    return () => {
      didCancel = true;
      if (observer && barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [percentage]);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" ref={barRef}></div>
    </div>
  );
};

export default ProgressBar;
