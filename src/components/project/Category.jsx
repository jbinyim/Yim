import { skillImg } from "../../utils/skillImg";

export default function Category() {
  return (
    <ul>
      <li>
        <span>ALL</span>
      </li>
      <li className="flex items-center gap-1">
        <img src={skillImg.front[4].img} alt="next Img" className="w-4" />
        <span>NEXT</span>
      </li>
    </ul>
  );
}
