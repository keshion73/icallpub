module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/valid-v-slot": ["error", { allowModifiers: true }],
  },
};

Vue.js(Vue2, Vue3) 및 상태 관리 경험
- Vue2와 Vue3를 활용한 다양한 프로젝트를 수행하며, 공통 컴포넌트 설계 및 개발을 진행.
- Vue2 환경에서는 Webpack을 활용하고, Vue3 환경에서는 Vite를 사용하여 효율적인 개발 환경을 구축.
- 주요 상태 관리 라이브러리인 Vuex와 Pinia를 활용해 애플리케이션 상태 관리 설계 및 구현 경험 보유.

UI 라이브러리 및 퍼블리싱
- Element Plus UI를 활용한 퍼블리싱 경험을 보유 및 구현.
- 효율적인 재사용 및 문서화를 위해 Storybook 라이브러리를 사용하여 컴포넌트 설명을 추가하고, 프로젝트 내 컴포넌트 기반 화면 개발 경험.

개발 환경 구축 및 서버 관리
- Webpack 및 Vite를 활용하여 최적화된 프론트엔드 개발 환경 구축.
- Nginx를 활용하여 웹서버를 구성하고 배포 경험을 보유.

<프로젝트와 관련된 보유 기술>
보유 기술명	기술 사용 기간	기술 숙련도
Vue.js (Vue2, Vue3)	4년	상급: 프로젝트에서 Vue2/Vue3를 기반으로 공통 컴포넌트 설계 및 복잡한 UI 구축 경험 다수 보유
Vuex / Pinia	3년	상급: Vuex를 사용해 복잡한 상태 관리 구현 경험, Vue3에서 Pinia로 전환하여 효율적인 상태 관리 구조 도입
JavaScript (Vanilla JS)	5년	상급: DOM 조작, 이벤트 처리, 다국어 처리 경험 및 웹프레임워크와의 연계를 통해 고도화된 솔루션 개발
TypeScript	2년	중상급: 타입 안정성을 위해 Vue 및 기타 프로젝트에 도입하여 코드 품질 향상 및 오류 감소
Webpack / Vite	3년 / 3년	중상급: Webpack 및 Vite를 사용해 효율적인 빌드 환경 설정 및 최적화 작업 경험
Nginx	2년	중상급: 프론트엔드 배포를 위한 웹 서버 구축 및 로드 밸런스/프록시 설정 경험
Storybook	1년	중상급: 프로젝트 컴포넌트 문서화 및 시각화, 디자인 시스템 구축 작업 참여
Element Plus UI	2년	중상급: Vue 기반의 퍼블리싱 진행 및 UI 컴포넌트 커스터마이징 경험 다수
애자일/Scrum	3년	중상급: Jira와 Confluence를 활용한 일정 관리, 스프린트 계획 및 팀 협업 경험
<유사 프로젝트 진행 경험>
프로젝트 1 - Vue.js 및 공통 컴포넌트 설계
프로젝트 설명: 대규모 웹 애플리케이션 개발 프로젝트에서 Vue2/Vue3 기반으로 공통 컴포넌트 라이브러리를 설계 및 개발.
사용한 기술: Vue.js(Vue2, Vue3), Vuex, Pinia, TypeScript, Element Plus UI, Storybook, Webpack(Vue2 환경), Vite(Vue3 환경).
담당 업무:
공통 컴포넌트 설계 및 개발을 통해 프로젝트 내 재사용 가능성 증가와 유지보수 비용 절감.
Vite로 개발 환경을 구축하고 코드 스플리팅 및 번들링 최적화 수행.
Storybook을 도입하여 팀원과의 협업 및 컴포넌트 문서화 진행.
프로젝트 2 - 하이브리드 Web 프레임워크 전환
프로젝트 설명: Anyframe(삼성 Java 프레임워크) + Xplatform을 Vanilla JavaScript + SBux 웹 프레임워크 및 전자정부 프레임워크를 기반으로 전환하는 프로젝트.
사용한 기술: Vanilla JavaScript, SBux(Web Framework), 전자정부 프레임워크, Git.
담당 업무:
프로젝트에서 공통 PL 역할 수행 및 다수의 개발 팀원(25명) 관리.
전체 형상 관리와 코드 리뷰, 공통 모듈 설계 및 기술 지원 담당.
Vanilla JavaScript와 SBux로 새로운 아키텍처 구축 및 기존 플랫폼 전환 작업 주도.
프로젝트 3 - 글로벌 애플리케이션 다국어 처리
프로젝트 설명: 대규모 다국어 지원 웹 앱 개발에서 다국어 처리 기능 구현.
사용한 기술: DB 기반 다국어 처리, JSON, Vue.js, JavaScript.
담당 업무:
DB를 기반으로 다국어 데이터를 설계하여 효율적인 문자열 관리 구현.
다국어 데이터를 JSON으로 관리하며 프론트엔드, 백엔드 간 통신 설계.
클라이언트 측에서 언어 변경에 따른 실시간 리렌더링 구현.
<프로젝트 진행 제안>
프로젝트 설계 및 개발 단계를 제안합니다
초기 단계: 기획 및 요구사항 분석 (1~2주)

요구사항 수집 및 분석, 전체 와이어프레임 작성.
프로젝트에서 재사용될 공통 컴포넌트 사전 정의 및 기술 스택 확정.
디자인 단계: UI/UX 설계 (1~2주)

Storybook을 활용하여 UI 스타일 가이드 및 컴포넌트 기반 디자인 시스템 정의.
고객 요구사항에 맞춘 인터랙션 설계 및 시각적 요소 확정.
개발 단계: 프론트엔드와 백엔드 동시 개발 (~4주)

프론트엔드 개발: Vue3와 Pinia를 사용하여 컴포넌트 기반 개발 진행. 빌드 도구로 Vite 설정 및 최적화.
백엔드 연동 작업: API를 세부 정의하고 데이터 통신 및 상태 관리를 구현.
다국어 처리 기능 개발: JSON 및 DB 기반 접근 방식을 고려하여 다국어 지원 기능 구현.
테스트 단계: 기능 및 퍼포먼스 테스트 (1~2주)

Storybook을 활용해 컴포넌트 기반 테스트 작성.
Nginx로 로컬 환경 서버를 구축 후, 로드 테스트 수행.
배포 단계: 최종 점검 및 배포 (1주)

Nginx를 통한 배포 환경 설정, SSL 인증서 적용 및 웹 서버 최적화.
Jira와 Confluence를 통해 작업 완료 사항 정리 및 최종 문서화

레거시 시스템 전환작업 수행 경험
- Anyframe(삼성 Java 프레임워크) + Xplatform에서 Vanilla JavaScript + SBux(웹 프레임워크) + 전자정부 프레임워크 로의 전환 프로젝트에서 공통 PL(프로덕트 리더) 역할을 1년 수행.
- 프로젝트 팀의 기술 지원 및 형상 관리 총괄 (전체 개발인원 25명).

프로젝트 관리 및 애자일 경험
- 애자일(Scrum) 및 Jira, Confluence를 활용하여 프로젝트 관리 및 일정 관리 수행.

Exbuilder 사용경험
- Exbuilder 사용경험은 없지만, 국산 서브파트 UI 프레임워크인 Sbux와 RealGrid 사용경험을 가지고 있음
