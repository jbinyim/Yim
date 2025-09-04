export default function InterviewBox() {
  return (
    <div className="flex flex-col gap-10">
      <div className="bg-gray-100 p-6 rounded-2xl">
        <p className="text-20-bold mb-5">Q. 개발자로 지원한 이유?</p>
        <p className="text-16-regular leading-8">
          자주 이용하던 사이트의 종료를 겪으며{" "}
          <span className="bg-yellow-100">
            '나만의 웹 서비스를 만들고 싶다'
          </span>
          는 열망이 생겼습니다. 친구와 게임 전적 검색 사이트를 개발하며 웹의
          매력에 빠졌고, 이후 학원에서 프론트엔드 개발 전문성을 키웠습니다.
          다양한 프로젝트 경험을 통해 웹 애플리케이션 제작 실력과 협업 능력을
          쌓았으며, <span className="bg-yellow-100">사용자 친화적인</span>{" "}
          서비스 구현에 깊은 열정을 가지게 되었습니다. 이러한 경험을 바탕으로
          <span className="bg-yellow-100">
            사용자들이 편리하게 소통하고 정보를 얻는 데
          </span>{" "}
          기여하고 싶습니다.
        </p>
      </div>
      <div className="bg-gray-100 p-6 rounded-2xl">
        <p className="text-20-bold mb-5">
          Q. 일에 있어 가장 중요하게 생각하는 것이 있다면?
        </p>
        <p className="text-16-regular leading-8">
          저는 새로운 기술에 대한{" "}
          <span className="bg-yellow-100">
            빠른 적응력과 맡은 일에 대한 책임감
          </span>
          을 바탕으로, 사용자에게 최적의 경험을 제공하는 UI/UX와 성능 최적화를
          가장 중요하게 생각하며 웹 개발에 임합니다.
        </p>
      </div>
    </div>
  );
}
