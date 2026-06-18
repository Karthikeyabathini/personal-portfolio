import { useEffect, useRef, useState } from "react";

function Counter({ value, label, icon: Icon }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      let frame = 0;
      const totalFrames = 50;
      const timer = setInterval(() => {
        frame += 1;
        setCount(Math.round((value / totalFrames) * frame));
        if (frame === totalFrames) clearInterval(timer);
      }, 24);
      observer.disconnect();
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="counter" ref={ref}>
      <Icon />
      <strong>{count}+</strong>
      <span>{label}</span>
    </div>
  );
}

export default Counter;
