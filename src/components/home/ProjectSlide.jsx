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
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("${project.img[0]}")`,
            }}
          ></div>
        </Link>

        {/* 뒷면 */}
        <div className="absolute inset-0 flex items-center justify-center bg-amber-200 text-white p-6 text-center rotate-y-180 backface-hidden">
          <p className="text-lg">{project.description}</p>
        </div>
      </div>
    </div>
  );
}
