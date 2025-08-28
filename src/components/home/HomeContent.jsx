import EducationBox from "./EducationBox";
import GithubBox from "./GithubBox";
import HomeTitle from "./HomeTitle";
import IntroduceBox from "./IntroduceBox";
import ProjectBox from "./ProjectBox";
import SkillBox from "./SkillBox";

export default function HomeContent() {
  return (
    <div className="relative flex flex-col gap-10 lg:gap-30 items-center pt-25 px-4 lg:pt-40 lg:px-0">
      <HomeTitle />
      <div className="w-full lg:w-269.5 grid grid-rows-1 lg:grid-cols-5 gap-2.5 lg:items-center lg:justify-center">
        <SkillBox />
        <ProjectBox />
        <IntroduceBox />
        <EducationBox />
        <GithubBox />
      </div>
    </div>
  );
}
