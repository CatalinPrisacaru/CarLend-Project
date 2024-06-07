import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const useScrollAnimation = (threshold = 0.5) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const currentTarget = targetRef.current; // Store the current value of the ref

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: threshold,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, options);

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) { // Use the stored variable in the cleanup
        observer.unobserve(currentTarget);
      }
    };
  }, [threshold]);

  return { targetRef, isVisible };
};

export default useScrollAnimation;

export const Containerrr = styled.div`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 1s ease, transform 1s ease;
  transform: scale(${(props) => (props.isVisible ? 1 : 0.5)});
`;
