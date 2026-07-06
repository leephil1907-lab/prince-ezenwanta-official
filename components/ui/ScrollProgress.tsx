"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {

  const [width, setWidth] = useState(0);

  useEffect(() => {

    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
      setWidth(progress);
    };

    update();
    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-[#C8A045] z-[9999]"
      style={{
        width: `${width}%`
      }}
    />
  );
}
