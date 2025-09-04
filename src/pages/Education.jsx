import Table from "../components/education/Table";
import TitleBox from "../components/layout/TitleBox";

export default function Education() {
  const edu = {
    name: ["과정", "기관", "기간"],
    rows: [
      [
        "클라우드 기반 풀스택 엔지니어 부트캠프",
        "코드잇 평생교육원",
        "23.12.29 ~ 24.06.13",
      ],
      [
        "스마트 웹콘텐츠 UI/UX 퍼블리셔&프론트엔드_B",
        "이젠아카데미DX교육센터",
        "25.01.16 ~ 25.08.19",
      ],
    ],
  };
  const career = {
    name: ["기관 명", "담당 업무", "기간"],
    rows: [["한국맥도날드(유한회사)", "제조", "21.01 ~ 22.03"]],
  };
  const school = {
    name: ["출신 학교", "학과", "기간"],
    rows: [
      ["서울기독대학교", "국제경영정보학과", "18.03 ~ 25.02"],
      ["서울 현대고등학교", "인문계", "15.03 ~ 18.02"],
    ],
  };
  const qualifications = {
    name: ["자격증", "기관", "취득일"],
    rows: [
      ["레크리에이션 1급", "국제평생교육원", "18.12"],
      ["웃음교육지도사 1급", "국제평생교육원", "18.12"],
      ["2종보통운전면허", "서울지방경찰청", "18.01"],
    ],
  };

  return (
    <section className="w-[1078px] mx-auto py-16">
      <TitleBox title="활동" />
      <main className="py-10 flex flex-col gap-15">
        <Table title="교육 이수" type={edu} />
        <Table title="자격 사항" type={qualifications} />
        <Table title="경력 사항" type={career} />
        <Table title="학력 사항" type={school} />
      </main>
    </section>
  );
}
