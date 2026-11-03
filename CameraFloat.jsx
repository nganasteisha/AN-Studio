
import { useEffect, useState } from "react";

function CameraFloat() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const updateScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", updateScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const rotation = Math.sin(scrollY / 240) * 9;

  return (
    <div
      className="floating-camera"
      style={{
        transform: `translateY(${Math.sin(scrollY / 130) * 22}px) rotate(${rotation}deg)`,
      }}
      aria-hidden="true"
    >
      <img
        src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=85"
        alt=""
      />
      <span>THROUGH MY LENS</span>
    </div>
  );
}

export default CameraFloat;
