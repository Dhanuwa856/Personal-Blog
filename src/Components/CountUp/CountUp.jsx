import React, { useState, useEffect, useRef } from "react";

const CountUp = ({ end }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const hasCounted = useRef(false);

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (ref.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !didCancel && !hasCounted.current) {
            hasCounted.current = true; // Set the flag to true
            let start = 0;
            const duration = 2000;
            const stepTime = Math.abs(Math.floor(duration / end));
            const timer = setInterval(() => {
              start += 1;
              setCount(start);
              if (start === end) {
                clearInterval(timer);
              }
            }, stepTime);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(ref.current);
    }

    return () => {
      didCancel = true;
      if (observer && ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end]);

  return (
    <div className="count-up" ref={ref}>
      {count}
    </div>
  );
};

export default CountUp;
