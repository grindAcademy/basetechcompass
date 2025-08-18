"use client"

import { useEffect, useState, useCallback } from "react";
import Counter from "./Counter";

export default function CounterUp({ end }) {
  const [inViewport, setInViewport] = useState(false);

  const handleScroll = useCallback(() => {
    const elements = document.getElementsByClassName("count-element");
    if (elements.length > 0) {
      const element = elements[0];
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (isInViewport && !inViewport) {
        setInViewport(true);
      }
    }
  }, [inViewport]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // ✅ now clean

  return (
    <span className="count-element">
      {inViewport && <Counter end={end} duration={20} />}
    </span>
  );
}
