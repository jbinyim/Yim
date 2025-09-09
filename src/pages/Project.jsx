import { useState } from "react";
import { projects } from "../utils/project";
import { Link } from "react-router-dom";

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <main className="bg-[#242424] w-full min-h-screen h-full">
      <section className=" mx-auto flex flex-col lg:flex-row gap-8">
        {/* 왼쪽 큰 프로젝트 영역 */}
        <article
          className="lg:w-1/2 h-[calc(100vh-74px)] flex flex-col lg:sticky top-18.5 left-0"
          style={{ backgroundColor: `${selectedProject.color.bg}` }}
        >
          <img
            src={selectedProject.img[1]}
            alt="프로젝트 썸네일"
            className="object-contain w-[500px] h-[500px] mx-auto"
          />

          <div
            className="mt-2 px-8"
            style={{ color: `${selectedProject.color.text}` }}
          >
            <p className="text-12-normal">{selectedProject.title}</p>
            <p className="text-30-bold leading-14 my-6">
              {selectedProject.oneLine}
            </p>
            <p className="text-12-normal">{selectedProject.date}</p>
          </div>
        </article>
        {/* 오른쪽 프로젝트 리스트 */}
        <article className="w-1/2 grid grid-cols-2 gap-8 mt-20">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`pr-2 cursor-pointer ${
                idx % 2 === 1 ? "mt-[70px]" : ""
              }`}
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.img[0]}
                alt="프로젝트 썸네일"
                className="w-[540px] max-h-[740px] mx-auto rounded-2xl border border-gray-700"
              />
              <div className="text-[#afb6bc] mt-4">
                <p className="text-20-bold line-clamp-2">{project.oneLine}</p>
                <p className="text-10-normal mt-6">{project.date}</p>
              </div>
              <div className="flex items-center justify-between gap-2 text-white">
                <Link
                  to={`/project/${project.id}`}
                  className="border border-white w-1/2 rounded-sm text-center py-2"
                >
                  상세 보기
                </Link>
                <Link
                  to={project.url}
                  target="_blank"
                  className="border border-white w-1/2 rounded-sm text-center py-2"
                >
                  사이트 바로가기
                </Link>
              </div>
            </div>
          ))}
        </article>
      </section>
    </main>
  );
}
