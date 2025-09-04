import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function Project() {
  useEffect(() => {
    gsap.to(".img1", {
      y: 500, // 500px 내려감
      scrollTrigger: {
        trigger: ".img1",
        start: "top top", // 스크롤 시작 지점
        scrub: true, // 스크롤에 따라 부드럽게
      },
    });

    // 두 번째 이미지
    gsap.to(".img2", {
      y: 500,
      scrollTrigger: {
        trigger: ".img1",
        start: "top+=500 top", // 첫번째가 500px 내려간 시점부터
        scrub: true,
      },
    });
  }, []);
  return (
    <main className="-mt-18.5 bg-[#242424] w-full min-h-screen h-full">
      <section className="w-[1078px] mx-auto py-30 flex justify-between">
        <div className="img1">
          <div>
            <img
              src="https://jbinyim12.cafe24.com/img/movingThum.png"
              alt="프로젝트 썸네일"
              className="w-[255px] h-[437px] object-contain"
            />
          </div>
          <div>
            <img
              src="https://jbinyim12.cafe24.com/img/movingThum.png"
              alt="프로젝트 썸네일"
              className="w-[255px] h-[437px] object-contain"
            />
          </div>
          <div>
            <img
              src="https://jbinyim12.cafe24.com/img/movingThum.png"
              alt="프로젝트 썸네일"
              className="w-[255px] h-[437px] object-contain"
            />
          </div>
        </div>
        <div className="img2 mt-20">
          <div>
            <img
              src="https://jbinyim12.cafe24.com/img/movingThum.png"
              alt="프로젝트 썸네일"
              className="w-[255px] h-[437px] object-contain"
            />
          </div>
          <div>
            <img
              src="https://jbinyim12.cafe24.com/img/movingThum.png"
              alt="프로젝트 썸네일"
              className="w-[255px] h-[437px] object-contain"
            />
          </div>
          <div>
            <img
              src="https://jbinyim12.cafe24.com/img/movingThum.png"
              alt="프로젝트 썸네일"
              className="w-[255px] h-[437px] object-contain"
            />
          </div>
        </div>
        <div className="img3 mt-5">
          <div>
            <img
              src="https://jbinyim12.cafe24.com/img/movingThum.png"
              alt="프로젝트 썸네일"
              className="w-[255px] h-[437px] object-contain"
            />
          </div>
          <div>
            <img
              src="https://jbinyim12.cafe24.com/img/movingThum.png"
              alt="프로젝트 썸네일"
              className="w-[255px] h-[437px] object-contain"
            />
          </div>
          <div>
            <img
              src="https://jbinyim12.cafe24.com/img/movingThum.png"
              alt="프로젝트 썸네일"
              className="w-[255px] h-[437px] object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
