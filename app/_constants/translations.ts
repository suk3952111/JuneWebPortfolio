export const translations = {
  en: {
    title: "JuneSeok Woo – Front-End Developer",
    subtitle:
      "Always Learning, Always Growing – A Passionate Front-End Developer",
    description:
      "I am a developer who challenges new technologies and grows by applying them to projects. I enjoy learning new technologies and applying them to real-world scenarios. Since I started coding, I have continuously worked on projects, gaining experience in both collaborative and individual projects. Through collaboration with backend developers, I realized the importance of API design and data structure definition, and I strive to become a developer who pursues API First Design. I constantly study to become a better developer. In personal projects, I have used Supabase to design databases, implement OAuth authentication, and real-time features, testing and learning the latest technologies. I enjoy learning new technologies, such as transitioning from React to Next.js and from Context API to Zustand and Redux, while studying project structure and performance optimization in depth.",
    projects: "Selected Works",
    nextjsProjects: "Next.js Projects",
    reactProjects: "React Projects",
    viewLive: "Live Demo",
    viewCode: "Source Code",
    projectDescriptions: {
      nextjs: [
        {
          name: "TRIP TERIOR",
          description:
            "A family trip management project. Provides features to manage trip preparations, records, and sharing in group units. Implemented using Next.js 14 (App Router), TypeScript, SCSS, OAuth, and more. Responsible for user authentication using Kakao OAuth API and JWT tokens, collaboration using Figma and Notion, and modular styling with SCSS.",
          link: "https://github.com/SWYP-6-6/tripterrior",
          demoLink: null, // 예시 데모 링크
        },
        {
          name: "Moilkji",
          description:
            "A platform for book clubs and community features. Collaboration project with designers and backend developers. Used Next.js 14 (App Router), TypeScript, TanStack Query, Zustand, Zod, Tailwind, Shadcn/ui, and more. Implemented book club creation using Aladin book list API, daily reading time goals, and integrated search for clubs and reviews.",
          link: "https://github.com/Codeit-Sprint-Teamproject/frontend",
          demoLink: null, // 데모 링크 없음
        },
        {
          name: "Synamon",
          description:
            "A meeting platform where people with similar interests can share new experiences. Find and join meetings based on hobbies and interests, or create new ones. Built with Next.js, TypeScript, Tailwind CSS, ReactQuery, Axios, ReactHookForm, Zod, Shadcn/ui, NaverMap, KakaoPostcode, and DatePicker. Implemented CRUD features for participation history, my meetings, and recruitment status.",
          link: "https://github.com/Codeit-part4-team1/synamon",
          demoLink: "https://synamon.vercel.app/", // 예시 데모 링크
        },
        {
          name: "TickyTocky",
          description:
            "A web service to manage team tasks and schedules. Implemented invitation-related CRUD features and popup UI. Used Next.js, Axios, ReactHookForm, Zustand, SCSS, Stylelint, ESLint, and Prettier. Also developed common components like TagField, CardTags, Dropdown, etc.",
          link: "https://github.com/TickyTocky/TickyTocky",
          demoLink: "https://ticky-tocky.vercel.app/", // 데모 링크 없음
        },
      ],
      react: [
        {
          name: "chat-app",
          description:
            "A chat application with real-time notification features. Used React Vite, React Hook Form, Supabase, Supabase Realtime, and Supabase Storage. Implemented real-time notifications and messaging using Supabase Realtime, and ensured data integrity by connecting chat and user tables with foreign keys.",
          link: "https://github.com/suk3952111/chat-app",
          demoLink: "https://chat-app-lemon-xi.vercel.app/", // 예시 데모 링크
        },
        {
          name: "My E-commerce App",
          description:
            "An online shopping web application. Search for products, add them to the cart, manage them, and write comments on specific products. Built with React-Vite, Supabase, Supabase Storage, React Hook Form, UUID, and Fake Store API. Implemented user authentication, cart management, and custom hooks for state management and business logic modularization.",
          link: "https://github.com/suk3952111/My-E-commerce-App",
          demoLink: "https://my-e-commerce-app-pink.vercel.app/",
        },
      ],
    },
    footer: "© 2025 JuneSeok Woo. Designed and developed by JuneSeok Woo.",
    nav: {
      name: "JuneSeok Woo",
      blog: "Blog",
      blogWarning: "The blog is under construction!",
    },
    links: {
      github: "https://github.com/suk3952111",
      linkedin: "https://www.linkedin.com/in/june-seok-woo-445081273/",
    },
  },
  ko: {
    title: "프론트엔드 개발자 우준석",
    subtitle: "끊임없이 배우며 성장하는 프론트엔드 개발자",
    description:
      "저는 새로운 기술에 도전하고, 이를 프로젝트에 적용하며 성장하는 개발자입니다. 새로운 기술을 배우고 실무에 적용하는 것을 즐깁니다. 코딩을 시작한 후부터 단 한 시도 멈추지 않고 프로젝트를 진행하며 다양한 협업과 개인 프로젝트를 경험했습니다. 특히, 백엔드와의 협업 프로젝트를 통해 API 설계와 데이터 구조 정의의 중요성을 체감했고, 이를 바탕으로 API First Design을 추구하는 개발자가 되려 노력하고 있습니다. 끊임없이 공부하며 더 나은 개발자가 되기 위해 노력합니다. 개인 프로젝트에서는 Supabase를 활용해 데이터베이스 설계와 OAuth 인증, realtime 기능을 구현하며 최신 기술을 테스트하고 학습했습니다. React에서 Next.js로 그리고 Context API에서 Zustand, Redux로 전환하는 과정을 경험하며 프로젝트 구조와 성능 최적화에 대한 더 깊은 공부를 하며 새로운 기술을 배우는 것을 즐깁니다.",
    projects: "주요 작업",
    nextjsProjects: "Next.js 프로젝트",
    reactProjects: "React 프로젝트",
    viewLive: "라이브 데모",
    viewCode: "소스 코드",
    projectDescriptions: {
      nextjs: [
        {
          name: "TRIP TERIOR",
          description:
            "가족여행관리 프로젝트. 그룹 단위로 여행 준비부터 기록 그리고 공유까지 손쉽게 관리할 수 있는 기능을 제공. Next.js 14 (App Router), TypeScript, SCSS, OAuth 등을 사용. Kakao OAuth API와 JWT 토큰을 활용한 사용자 인증 처리 구현, Figma와 Notion을 통한 협업, SCSS의 module.scss와 mixins를 활용한 모듈화된 스타일 구현.",
          link: "https://github.com/SWYP-6-6/tripterrior",
          demoLink: null, // 예시 데모 링크
        },
        {
          name: "모읽지",
          description:
            "독서 모임과 커뮤니티 기능 플랫폼. 디자이너 및 백엔드 개발자와의 협업 프로젝트. Next.js 14 (App Router), TypeScript, TanStack Query, Zustand, Zod, Tailwind, Shadcn/ui 등을 사용. 알라딘 책 리스트 API를 활용한 독서 모임 생성, 하루 독서 시간 목표 설정 및 달성 여부 확인, 모임과 리뷰를 통합 검색할 수 있는 페이지 구현.",
          link: "https://github.com/Codeit-Sprint-Teamproject/frontend",
          demoLink: null, // 데모 링크 없음
        },
        {
          name: "Synamon",
          description:
            "뜻이 맞는 사람들과 함께 활동하며 새로운 경험을 나눌 수 있는 모임 플랫폼. 취향과 관심사에 맞는 모임을 찾아 가입하거나 직접 새로운 모임을 생성. Next.js, TypeScript, Tailwind CSS, ReactQuery, Axios, ReactHookForm, Zod, Shadcn/ui, NaverMap, KakaoPostcode, DatePicker 등을 사용. 참여 내역, 내 모임, 모집 현황 CRUD 기능 구현.",
          link: "https://github.com/Codeit-part4-team1/synamon",
          demoLink: "https://synamon.vercel.app/", // 예시 데모 링크
        },
        {
          name: "TickyTocky",
          description:
            "팀의 업무와 일정을 관리할 수 있는 웹서비스. 초대 관련 CRUD 기능 및 팝업 UI 구현. Next.js, Axios, ReactHookForm, Zustand, SCSS, Stylelint, ESLint, Prettier 사용. TagField, CardTags, Dropdown 등의 공용 컴포넌트 구현.",
          link: "https://github.com/TickyTocky/TickyTocky",
          demoLink: "https://ticky-tocky.vercel.app/",
        },
      ],
      react: [
        {
          name: "chat-app",
          description:
            "실시간 알림 기능을 포함한 채팅 애플리케이션. React Vite, React Hook Form, Supabase, Supabase Realtime, Supabase Storage 사용. Supabase Realtime을 이용한 실시간 알림 및 메시징 기능 구현, React Hook Form을 활용한 로그인 및 회원가입 폼의 즉각적인 유효성 검사 구현. ",
          link: "https://github.com/suk3952111/chat-app",
          demoLink: "https://chat-app-lemon-xi.vercel.app/",
        },
        {
          name: "My E-commerce App",
          description:
            "온라인 쇼핑 웹 애플리케이션. 상품 검색, 장바구니 관리, 특정 상품에 댓글 작성 및 소통 기능. React-Vite, Supabase, Supabase Storage, React Hook Form, UUID, Fake Store API 사용. React Hook Form을 통한 폼 구성 요소의 실시간 유효성 검사, Supabase를 활용한 사용자 인증 시스템 구현, 사용자 인증 및 장바구니 관리를 위한 커스텀 훅 설계.",
          link: "https://github.com/suk3952111/My-E-commerce-App",
          demoLink: "https://my-e-commerce-app-pink.vercel.app/",
        },
      ],
    },
    footer: "© 2025 우준석. 본 사이트는 포트폴리오입니다.",
    nav: {
      name: "우준석",
      blog: "블로그",
      blogWarning: "블로그는 공사 중이에요!",
    },
    links: {
      github: "https://github.com/suk3952111",
      linkedin: "https://www.linkedin.com/in/june-seok-woo-445081273/",
    },
  },
};
