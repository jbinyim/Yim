import remarkGfm from "remark-gfm";
import TitleBox from "../components/layout/TitleBox";
import ReactMarkdown from "react-markdown";
import { projects } from "../utils/project";
import { FiSliders, FiList, FiGrid } from "react-icons/fi";
import { useState } from "react";
import { skillImg } from "../utils/skillImg";
import Category from "../components/project/Category";

export default function Project() {
  const [isCategory, setIsCategory] = useState(false);
  const [isGridLayout, setIsGridLayout] = useState(true);

  return (
    <main className="w-full min-h-screen -mt-18.5 bg-[#f7f8fc] mx-auto">
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
            className="w-full border rounded-sm px-2 text-10-normal"
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
              className={`h-120 ${!isGridLayout && "h-75"}`}
            >
              <img
                src={project.img[2]}
                alt="프로젝트 이미지"
                className="w-full h-full object-top"
              />
              <p>{project.title}</p>
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
