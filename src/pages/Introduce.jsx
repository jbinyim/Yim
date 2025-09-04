import HashTag from "../components/common/HashTag";
import InterviewBox from "../components/introduce/InterviewBox";
import Review from "../components/introduce/Review";
import TitleBox from "../components/layout/TitleBox";
import { useState } from "react";

export default function Introduce() {
  const [activeTab, setActiveTab] = useState("interview");

  const tabs = [
    { key: "interview", label: "인터뷰" },
    { key: "review", label: "리뷰" },
    { key: "contact", label: "이력서" },
  ];
  return (
    <section className="lg:w-[1078px] mx-auto py-16 px-4 lg:px-0">
      <TitleBox title="소개" />
      <article className="mb-20">
        <p className="my-13 text-16-normal lg:text-24-normal leading-6 lg:leading-10">
          작은 배움도 놓치지 않고 성장으로 이어가며
          <br />
          <span className="text-[#3a46cd]">
            최신 웹 기술을 빠르게 배우고 사용자 친화적인 웹사이트를 만드는 꿈을
            키우는 중 입니다.
          </span>
        </p>
        <div className="flex flex-col items-center gap-4">
          <img
            src="https://jbinyim12.cafe24.com/web/upload/captcha/me-removebg-preview.png"
            alt="임정빈 사진"
            className="lg:w-109.5 lg:h-127.5"
          />
          <HashTag />
        </div>
      </article>
      <article className="w-full">
        <div className="flex border-b border-gray-300">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => !tab.disabled && setActiveTab(tab.key)}
              disabled={tab.disabled}
              className={`flex-1 text-center px-4 py-2 font-medium border-b-2 cursor-pointer ${
                activeTab === tab.key
                  ? "border-[#4a508f] text-[#4a508f]"
                  : "border-transparent text-gray-600 hover:text-gray-800"
              } ${
                tab.disabled
                  ? "text-gray-400 cursor-not-allowed hover:text-gray-400"
                  : ""
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="py-6 px-4 border-gray-300 rounded-b-md bg-white">
          {activeTab === "interview" && <InterviewBox />}
          {activeTab === "review" && <Review />}
          {activeTab === "contact" && <div>Contact 내용</div>}
        </div>
      </article>
    </section>
  );
}
