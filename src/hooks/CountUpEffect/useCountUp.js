import { useState, useEffect } from "react";

const useCountUp = (targetCount, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / targetCount));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === targetCount) {
        clearInterval(timer);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [targetCount, duration]);

  return count;
};

export default useCountUp;
