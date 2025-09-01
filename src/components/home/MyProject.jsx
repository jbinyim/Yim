import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { projects } from "../../utils/project";
import SeeMoreButton from "../common/SeeMoreButton";
import ProjectSlide from "./ProjectSlide";

export default function MyProject() {
  return (
    <main className="w-[1078px] my-35 mx-auto">
      <article className="flex items-center gap-2 px-4 lg:px-0">
        <img src="/myproject.svg" alt="별 아이콘" className="h-6.5" />
        <span className="text-22-bold lg:text-36-bold">
          가능성을 여는 이야기
        </span>
      </article>
      <article className="hidden lg:block mt-15">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={8000}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx} className="rounded-2xl overflow-hidden">
              <ProjectSlide project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </article>
      <SeeMoreButton text="프로젝트 더 보러가기" link="project" />
    </main>
  );
}
