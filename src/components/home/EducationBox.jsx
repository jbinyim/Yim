import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function EducationBox() {
  const educationRef = useRef(null);
  const educationAnimation = useRef(null);

  useEffect(() => {
    educationAnimation.current = gsap.to(educationRef.current, {
      y: -10,
      duration: 0.5,
      ease: "power1.out",
      yoyo: true,
      repeat: -1,
      paused: true,
    });
  }, []);

  const handleMouseEnter = () => {
    educationAnimation.current.restart();
  };
  const handleMouseLeave = () => {
    educationAnimation.current.pause(0);
  };

  return (
    <Link to="/education" className="order-3">
      {/* lg size */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="hidden h-100 bg-[#e0e0e0] rounded-2xl lg:flex flex-col gap-10 cursor-pointer"
      >
        <div className="p-6 cursor-pointer">
          <p className="text-20-bold mb-3">교육</p>
          <p className="text-13-normal">
            최신 웹 기술을 활용한
            <br />
            풀스택 개발 양성 과정을 이수
          </p>
        </div>
        <img
          ref={educationRef}
          src="/educationbg.jpg"
          alt="교육 이미지"
          className="rounded-full"
        />
      </div>
      {/* sm size */}
      <div className="lg:hidden w-full h-46.5 bg-[#e0e0e0] rounded-2xl flex justify-between">
        <div className="p-6 cursor-pointer">
          <p className="text-20-bold mb-3">교육</p>
          <p className="text-13-normal">
            최신 웹 기술을 활용한
            <br />
            풀스택 개발 양성 과정을 이수
          </p>
        </div>
        <img
          src="/educationbg.jpg"
          alt="교육 이미지"
          className="rounded-full"
        />
      </div>
    </Link>
  );
}
