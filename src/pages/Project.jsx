import remarkGfm from "remark-gfm";
import TitleBox from "../components/layout/TitleBox";
import ReactMarkdown from "react-markdown";
import { projects } from "../utils/project";
import { FiSliders, FiList, FiGrid } from "react-icons/fi";
import { useState } from "react";
import { skillImg } from "../utils/skillImg";
import Category from "../components/project/Category";
import { Link } from "react-router-dom";

export default function Project() {
  const [isCategory, setIsCategory] = useState(false);
  const [isGridLayout, setIsGridLayout] = useState(true);

  return (
    <main className="w-full h-full -mt-18.5 bg-[#f7f8fc] mx-auto">
      <article className="w-[1078px] mx-auto pt-34">
        <TitleBox title="프로젝트" />
        <figure className="w-full flex gap-2 my-4">
          <span
            onClick={() => setIsCategory((prev) => !prev)}
            className={`inline-block border p-2 rounded-sm cursor-pointer ${
              isCategory ? "bg-gray-200" : "bg-white"
            }`}
          >
            <FiSliders />
          </span>
          <input
            type="text"
            placeholder="제목 또는 기술로 검색해 보세요!"
            className="w-full border rounded-sm px-2 text-14-normal"
          />
          <div className="flex border rounded-sm">
            <span
              onClick={() => setIsGridLayout(true)}
              className={`inline-block p-2 cursor-pointer ${
                isGridLayout && "bg-gray-200"
              }`}
            >
              <FiGrid />
            </span>
            <span
              onClick={() => setIsGridLayout(false)}
              className={`inline-block p-2 cursor-pointer ${
                !isGridLayout && "bg-gray-200"
              }`}
            >
              <FiList />
            </span>
          </div>
        </figure>
        {isCategory && <Category />}
        <figure
          className={`my-10 grid ${
            isGridLayout ? "grid-cols-3" : "grid-cols-1"
          } gap-4`}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className={`h-100 ${
                !isGridLayout && "h-75"
              } rounded-2xl overflow-hidden relative group`}
            >
              <img
                src={project.img[1]}
                alt="프로젝트 이미지"
                className="w-full h-2/3 object-cover object-top hover:object-bottom duration-1200"
              />
              <p className="w-full h-1/3 bg-[#353535]">
                <div className="p-4 mb-1">
                  <span className="block mb-2 text-white">{project.title}</span>
                  <span className="block text-12-normal text-gray-300">
                    {project.oneLine}
                  </span>
                </div>
                <ul className="w-full flex items-center absolute -bottom-6 group-hover:bottom-0 duration-700 bg-[#616161] text-white">
                  <Link
                    to={`/project/${project.id}`}
                    className="w-1/2 text-center cursor-pointer border-r"
                  >
                    상세보기
                  </Link>
                  <Link
                    to={project.url}
                    target="_blank"
                    className="w-1/2 text-center cursor-pointer"
                  >
                    바로가기
                  </Link>
                </ul>
              </p>
            </div>
          ))}
        </figure>
      </article>
    </main>
  );
}

// prose prose-slate max-w-none
//  <ReactMarkdown remarkPlugins={[remarkGfm]}>
//         {projects[0].markdown}
//       </ReactMarkdown>
