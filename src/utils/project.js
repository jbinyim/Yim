export const projects = [
  {
    id: 1,
    title: "Moving - 무빙",
    url: "https://moving-web.site/ko/mover-search",
    color: { bg: "#f1f9ff", text: "#242424" },
    group: "팀",
    date: "2025.07.01 ~ 2025.08.18",
    oneLine:
      "여러 기사님의 견적을 비교하고, 자신에게 가장 적합한 전문가를 선택할 수 있도록 돕는 스마트 이사 비교 플랫폼입니다.",
    skill: {
      frontend: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "date-fns",
        "react-icons",
        "react-hook-form",
        "TanStack Query",
      ],
      backend: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Cookie-Parser",
        "bcrypt",
        "JWT",
        "Passport.js",
        "Firebase",
      ],
      deployment: [
        "AWS EC2",
        "AWS RDS",
        "AWS S3",
        "Route 53",
        "Github Actions",
        "Vercel",
      ],
      etc: ["Sentry", "DeepL", "Jest"],
    },
    img: [
      "https://jbinyim12.cafe24.com/img/movingThum.png",
      "/moving/moving-home.png",
      "https://github.com/user-attachments/assets/a7dc306f-fd4a-49a5-a78c-88b7523cf19b",
      "https://github.com/user-attachments/assets/77e85b0f-6da1-4ffb-8e18-e5e86ca4c0b1",
      "https://github.com/user-attachments/assets/6ff5b0ac-916e-4657-b865-1cf31c72daaf",
      "https://github.com/user-attachments/assets/6ae0fa3a-43b6-4fd5-b5f0-4363d3be046b",
      "https://github.com/user-attachments/assets/07c810ea-87c8-4b07-a80a-e16b3fcfd602",
      "https://github.com/user-attachments/assets/97374679-cf21-487b-ac21-29191689936a",
      "https://github.com/user-attachments/assets/c3a96807-55bf-4328-9b05-549f6e6f2f39",
      "https://github.com/user-attachments/assets/8ff7abca-d4e5-4fca-8a39-5431a0587e2a",
    ],
    markdown: `
# 무빙 개인 개발 리포트

## 1. 프로젝트 개요

Moving은 사용자가 손쉽게 여러 이사업체의 견적을 비교하고, 자신에게 가장 적합한 전문가를 선택할 수 있도록 돕는 스마트 이사 비교 플랫폼입니다.

기존의 복잡하고 불투명했던 이사 견적 과정을 간소화하여, 사용자가 원하는 조건(이사 유형, 지역, 일정 등)에 맞는 전문가를 빠르게 찾을 수 있습니다.

또한 기사님(이사업체) 입장에서도 효율적인 고객 매칭이 가능해, 투명한 거래 환경과 편리한 서비스 경험을 제공합니다.

## 2. 담당한 작업

| **(FE)** | **(BE)**  |
| --- | --- |
| 대기 중인 견적 페이지 | 대기 중인 견적 조회 API |
| 받았던 견적 페이지 | 받은 견적 조회 API |
| 대기 중인, 받았던 견적 상세 페이지 | 내 견적 상세 조회 API |
| 커뮤니티  페이지 | 견적 확정하기 API |
| 커뮤니티 상세 페이지 | 커뮤니티 생성, 조회, 삭제 API |
| 커뮤니티 생성 페이지 | 커뮤니티 댓글 생성, 조회 삭제 API |

## 3. 기술적 성과

- 프로젝트에서 사용한 기술 스택:

| Frontend | Backend | Deployment | Etc |
| --- | --- | --- | --- |
| Next.js | Node.js | EC2 | Sentry |
| TypeScript | Express.js | RDS | Deepl |
| Tailwind | TypeScript | S3 | Jest |
| Tanstack Query | PostgreSQL | Route53 |  |
|  | PrismaORM | Github Action |  |
|  |  | Vercel |  |

## 4. 문제점 및 해결 과정

- 중첩 배열 문제
    - 문제점 : API에서 받아온 데이터가 "요청 별로 여러 견적서"가 들어있는 2차원 배열 구조라 map으로 렌더링하면 UI가 깨지거나 경고 발생.
    - 해결책 : flatMap을 사용해서 2차원 배열을 1차원으로 평탄화.
    - 배운점 : map만 쓰면 중첩 배열이 생기므로 부모-자식 구조의 데이터를 한번에 펼쳐서 렌더링할 때 flatmap이 적합함을 배웠다.
- 복합 조건 기반 견적 데이터 처리
    - 문제점: 견적 시스템의 전체 프로세스를 사용자에게 직관적으로 보여주는 것이 가장 중요한 과제였습니다. 견적 요청부터 기사 수락, 최종 선택까지의 모든 단계를 하나의 페이지에서 조회할 수 있도록 구현해야 했습니다.
    - 해결책: 
      1. 이사 카테고리(소형/가정/사무실), 날짜, 장소 정보로 견적 요청
      2. 여러 기사들의 견적 수락 상태 관리
      3. 매칭 완료/미완료 상태에 따른 데이터 분류
      4. 카테고리별, 확정 견적 여부에 따른 조건부 렌더링
      순서대로 분리하여 코드 작성
    - 배운점: 이 과정에서 백엔드와의 긴밀한 협업을 통해 **복잡한 조건의 API 호출을 최적화**하고, 사용자 경험을 해치지 않으면서도 정확한 데이터를 제공할 수 있도록 구현했습니다.

## 5. 협업 및 피드백

- 효과적인 협업 경험
    - **체계적인 PR 규칙 수립**: 팀 전체가 일관된 코드 품질을 유지할 수 있도록 명확한 규칙 설정
    - **Top-down 방식의 개발**: 전체 아키텍처를 먼저 설계한 후 세부 구현으로 진행하여 개발 속도 향상
    - **매일 오전 데일리 스크럼**: 정기적인 소통을 통한 진행 상황 공유 및 이슈 해결
- 개선이 필요했던 부분
    - **의사소통 부족으로 인한 비효율성**을 경험했습니다. 겹치는 컴포넌트를 각자 개발한 후 나중에 통합하거나, 추가 기능을 개별적으로 결정하여 시간이 촉박해지는 상황이 발생했습니다

## 6. 코드 품질 및 최적화

- 프론트엔드 측면에서는 **SEO와 웹 접근성**을 개선하는 데 중점을 두었다. 메타 태그와 구조화된 데이터를 적절히 활용하여 검색 엔진 친화적인 페이지를 구현했고, 시맨틱 태그 사용과 속성 적용을 통해 다양한 사용자 환경에서도 접근성이 보장되도록 했다. 이러한 개선은 단순히 검색 노출 향상뿐 아니라 더 많은 사용자가 서비스에 원활히 접근할 수 있도록 돕는 기반이 되었다.
- 백엔드 측면에서는 **Jest를 활용한 테스트 코드 작성**을 통해 코드 품질을 관리했다. 서비스 로직과 데이터베이스 쿼리에 대한 단위 테스트를 구현함으로써 주요 기능이 의도한 대로 동작하는지 검증할 수 있었고, 리팩터링이나 신규 기능 추가 시 발생할 수 있는 예기치 못한 오류를 사전에 방지할 수 있었다. 이 과정은 개발 안정성을 높이고 배포 과정에서의 불확실성을 줄이는 데 큰 도움이 되었다.

## 7. 향후 개선 사항 및 제안

- 주요 성과
    - **계획된 모든 기능 구현 완료**: 견적 관리 핵심 기능과 추가 커뮤니티 기능까지 기간 내 완성
    - **완성도 높은 서비스**: 실제 서비스로 출시 가능한 수준의 품질 달성
    - **팀워크 기반 개발**: 7명의 팀원이 각자의 역할을 충실히 수행하여 조화로운 결과물 도출
- 아쉬웠던 점 및 향후 개선 계획
    - **리팩토링 및 최적화 부족**: 급하게 추가된 커뮤니티 기능으로 인해 견적 페이지 최적화와 테스트 코드 작성이 미흡했습니다.
    - **컴포넌트화 부족**: 기간에 쫓겨 완성을 우선시하다 보니 재사용 가능한 컴포넌트 설계가 미흡했습니다.
- 향후 개선 방향
    - **체계적인 컴포넌트 아키텍처 설계**: 프로젝트 초기 단계에서 공통 컴포넌트 식별 및 설계
    - **테스트 주도 개발**: 안정적인 서비스 운영을 위한 체계적인 테스트 코드 작성
    - **성능 최적화**: 사용자 경험 향상을 위한 로딩 속도 및 반응성 개선
    

## 8. 이를 통해 배운점

- 부트 캠프에서 배울 수 있는 모든 기술을 배우고 진행한 프로젝트이다 보니 지금 까지 해온 프로젝트 중에 가장 완성도가 높게 만들어진 것 같다.
- 먼저 UI 작업 후 백엔드 API를 설계하고 프론트와 연동하는 Top-down 방식으로 구현을 하다 보니 작업 진행 상태가 눈으로 보이는 게 좋았다.
- 팀원들과 PR 규칙을 잘 정해서 불필요한 의사소통과 코드 리뷰를 잘 받을 수 있었지만 필요한 의사소통이 적극적으로 이뤄지지 않은 부분이 있어 아쉬웠던 것 같다.
- 개인적으로 아직 나의 배움이 부족 한 줄 알고 어려운 기능을 도전하기보단 기본적인 기능이라도 더 익숙해지자는 생각으로 현재 기능을 맡았는데 학습하면서 하는 프로젝트일 때 어려운 기능이라도 도전해 볼 걸라는 생각이 많이 들었다.
- 비슷한 형태의 데이터들로 API를 만들 때 기준을 만들어 그거에 맞게 데이터를 호출할 수 있게 했으면 더 좋았을 것 같다.

이 프로젝트는 단순히 기능 구현을 넘어서 **실제 서비스 개발의 전 과정을 경험**할 수 있는 소중한 기회였습니다. 특히 복잡한 비즈니스 로직을 사용자 친화적으로 구현하는 과정에서 프론트엔드 개발자로서의 핵심 역량을 기를 수 있었습니다.

앞으로는 이 경험을 바탕으로 **보안, 최적화, 테스트 등 서비스 품질 향상**에 더욱 집중하여, 사용자에게 더 나은 경험을 제공할 수 있는 개발자로 성장하고 싶습니다. 또한 효과적인 팀 협업을 위한 커뮤니케이션 스킬도 지속적으로 발전시켜 나가겠습니다.`,
  },
  {
    id: 2,
    title: "FC전적검색",
    url: "https://www.fcinfo.kr",
    color: { bg: "#242424", text: "#fff" },
    group: "듀오",
    oneLine:
      "FC온라인 게임 전적을 확인하고 유저들과 소통할 수 있는 전적 공유 플랫폼입니다.",
    skill: [],
    img: [
      "https://jbinyim12.cafe24.com/img/fcinfoThum.png",
      "/fc/fc-home.png",
      "",
    ],
  },
  {
    id: 3,
    title: "공부의 숲",
    url: "https://6-studyforest-phytoncide-fs.netlify.app",
    color: { bg: "#f6f4ef", text: "#242424" },
    group: "팀",
    oneLine:
      "습관을 형성하고, 집중 시간에 따라 포인트를 지급하는 기능을 제공하는 서비스입니다.",
    skill: [],
    img: ["https://jbinyim12.cafe24.com/img/study%402x.png", "/study.png"],
  },
  {
    id: 4,
    title: "최애의 포토",
    url: "https://6-photo-2-fe.vercel.app/market",
    color: { bg: "#0f0f0f", text: "#fff" },
    group: "팀",
    oneLine:
      "디지털 시대의 새로운 수집 문화를 선도하는 디지털 포토카드 거래 플랫폼입니다.",
    skill: [],
    img: ["https://jbinyim12.cafe24.com/img/photoThum.png", "/photo.png"],
  },
  {
    id: 5,
    title: "컴패션 - 클론코딩",
    url: "https://compassion-clone.web.app",
    color: { bg: "#005eb8", text: "#fff" },
    group: "솔로",
    oneLine: "기존 컴패션 사이트를 클론 코딩한 사이트입니다.",
    skill: [],
    img: [
      "https://jbinyim12.cafe24.com/img/compan.png",
      "https://jbinyim12.cafe24.com/web/upload/captcha/home.png",
    ],
  },
  {
    id: 6,
    title: "연애 내면 테스트 - MBTI",
    url: "https://jb-mbti.firebaseapp.com",
    color: { bg: "#ffeded", text: "#242424" },
    group: "솔로",
    oneLine: "연애 스타일로 자신의 mbti를 확인해 볼 수 있는 사이트입니다.",
    skill: [],
    img: [
      "https://jbinyim12.cafe24.com/img/mbti.png",
      "https://jbinyim12.cafe24.com/web/upload/captcha/screencapture-jb-mbti-firebaseapp-result-2024-06-11-11_48_11.png",
    ],
  },
  {
    id: 7,
    title: "ToDoList",
    url: "https://jb-todolist.firebaseapp.com",
    color: { bg: "#ececec", text: "#242424" },
    group: "솔로",
    oneLine: "리엑트를 이용해 만든 Todo 리스트입니다.",
    skill: [],
    img: [
      "https://jbinyim12.cafe24.com/img/todolist.png",
      "https://jbinyim12.cafe24.com/web/upload/captcha/screencapture-jb-todolist-firebaseapp-2024-05-18-02_50_02.png",
    ],
  },
  {
    id: 8,
    title: "꼬리의 일기",
    url: "https://taillife.firebaseapp.com",
    color: { bg: "#4e413a", text: "#fff" },
    group: "솔로",
    oneLine: "반려동물의 일상을 기록하는 기록저장소 입니다.",
    skill: [],
    img: [
      "https://jbinyim12.cafe24.com/img/tail.png",
      "https://jbinyim12.cafe24.com/web/upload/captcha/screencapture-taillife-web-app-2024-05-18-14_32_56.png",
    ],
  },
];
