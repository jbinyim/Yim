import { Link } from "react-router-dom";

export default function ProjectSlide({ project }) {
  return (
    <div className="group perspective">
      <div className="relative w-full h-[550px] transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
        {/* 앞면 */}
        <Link
          to={`${project.url}`}
          target="_blank"
          className="absolute inset-0 backface-hidden"
        >
          <div
            className="w-[353px] h-[550px] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("${project.img[0]}")`,
            }}
          ></div>
        </Link>

        {/* 뒷면 */}
        <figure
          className="absolute inset-0 rotate-y-180 backface-hidden rounded-2xl"
          style={{
            backgroundColor: project.color.bg,
            color: project.color.text,
          }}
        >
          <Link
            to={`${project.url}`}
            target="_blank"
            className="inline-block w-full h-full"
          >
            <div className="mt-15 px-10">
              <p className="text-16-regular mb-2">{project.group}</p>
              <p className="text-30-bold mb-10">{project.title}</p>
              <p className="text-16-normal">{project.oneLine}</p>
            </div>
          </Link>
        </figure>
      </div>
    </div>
  );
}
