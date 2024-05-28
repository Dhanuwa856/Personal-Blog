import React, { useEffect, useState } from "react";

const useBlinkingCursor = (speed = 500) => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, speed);

    return () => clearInterval(intervalId);
  }, [speed]);

  return showCursor;
};

export default useBlinkingCursor;
