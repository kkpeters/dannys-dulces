// https://codesandbox.io/p/sandbox/musing-bush-xys5b?file=%2Fsrc%2FFadeInSection.js%3A5%2C9

import { useState, useRef, useEffect } from "react";
import {ReactNode} from "react";
import "../FadeInSection.css";

interface FadeInSectionProps {
  children: ReactNode;
}


export function FadeInSection({children}: FadeInSectionProps) {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // In your case there's only one element to observe:
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        setVisible(true);

        // No need to keep observing:
        if (domRef.current) {
          observer.unobserve(domRef.current);
        }
      }
    });

    // check that the DOM actually loaded, then we observe
    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => { 
          if (domRef.current) {
              observer.unobserve(domRef.current);
          }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
}

