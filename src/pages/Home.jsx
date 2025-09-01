import { useEffect, useState } from "react";
import HomeContent from "../components/home/HomeContent";
import Mystory from "../components/home/Mystory";
import MyProject from "../components/home/MyProject";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
      const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;

      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div>
      <section className="lg:sticky top-0 left-0 z-0 min-h-screen">
        <div className="min-h-screen relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-100 ease-out"
            style={{
              backgroundImage: "url(/hero-bg.jpg)",
              transform: `translate(${mousePosition.x * 60}px, ${
                mousePosition.y * 20
              }px) scale(1.05)`,
            }}
          />
          <HomeContent />
        </div>
      </section>
      <section className="min-h-screen bg-white relative z-10">
        <Mystory />
        <MyProject />
      </section>
    </div>
  );
}
