import React, { useEffect, useState } from "react";
import "./useTypewriter.css";

const useTypewriter = (words, speed = 200, delay = 3000) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, words, speed, delay, loopNum]);

  return text;
};

export default useTypewriter;
