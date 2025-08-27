export default function HomeContent() {
  return (
    <div className="relative flex flex-col gap-30 items-center pt-40">
      <p className="text-custom-black text-5xl font-bold">Introduce Myself</p>
      <div className="grid grid-cols-5 gap-2.5 items-center justify-center w-269.5">
        <div className="h-85 skill-img rounded-2xl text-white flex flex-col justify-between cursor-pointer">
          <div className="p-6">
            <p className="text-20-bold mb-3">기술</p>
            <p className="text-13-normal">
              개발자로서 보유한
              <br />
              핵심 기술 스택
            </p>
          </div>
        </div>
        <div className="h-100 bg-[#e0e0e0] rounded-2xl cursor-pointer project-img">
          <div className="p-6 text-white">
            <p className="text-20-bold mb-3">프로젝트</p>
            <p className="text-13-normal">
              개발 역량을 강화하기 위해 끊임없이 고민하고 발전시킨 프로젝트
            </p>
          </div>
        </div>
        <div className="h-120 bg-gradient-to-b from-[#242424] to-[#5f5f5f] rounded-2xl text-white flex flex-col justify-between cursor-pointer">
          <div className="p-6">
            <p className="text-20-bold mb-3">소개</p>
            <p className="text-13-normal">
              개발자가 되기 위한
              <br />
              나의 스토리
            </p>
          </div>
          <img
            className="mb-15"
            src="https://jbinyim12.cafe24.com/web/upload/captcha/me-removebg-preview.png"
            alt="임정빈 사진"
          />
        </div>
        <div className="h-100 bg-[#e0e0e0] rounded-2xl flex flex-col gap-10 cursor-pointer">
          <div className="p-6 cursor-pointer">
            <p className="text-20-bold mb-3">교육</p>
            <p className="text-13-normal">
              최신 웹 기술을 활용한 풀스택 개발 양성 과정을 이수
            </p>
          </div>
          <img
            className="rounded-full"
            src="https://plus.unsplash.com/premium_vector-1698192041909-3a5a4a6ee089?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0"
            alt="교육 이미지"
          />
        </div>
        <div className="h-85 bg-gradient-to-br from-[#179B87] to-[#17637C] rounded-2xl text-white flex flex-col justify-between cursor-pointer">
          <div className="p-6">
            <p className="text-20-bold mb-3">깃허브</p>
            <p className="text-13-normal">
              개인 프로젝트와 코드 기여를 확인할 수 있는 깃허브 저장소
            </p>
          </div>
          <img
            className="mb-15"
            src="https://cdn3d.iconscout.com/3d/free/thumb/free--3d-icon-png-download-12222567.png"
            alt="임정빈 사진"
          />
        </div>
      </div>
    </div>
  );
}
