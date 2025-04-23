import React from "react";

const badges = [
  "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
  "https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white",
  "https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white",
  "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",
  "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black",
  "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white",
  "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
  "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white",
  "https://img.shields.io/badge/Styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white",
  "https://img.shields.io/badge/Figma-000000?style=for-the-badge&logo=figma&logoColor=white",
  "https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white",
  "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white",
  "https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white",
  "https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=zustand&logoColor=white",
  "https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white",
  "https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white",
];

export default function TechStackCarousel() {
  return (
    <div className="w-full overflow-hidden relative h-[50px]">
      <ul className="flex items-center gap-3 animate-slide">
        {[...badges, ...badges].map((badge, index) => (
          <li key={index} className="h-[32px] flex-shrink-0">
            <img
              src={badge}
              alt={`Badge ${index}`}
              className="h-full object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
