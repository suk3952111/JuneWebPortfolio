"use client";

import SetThemeButton from "./_components/SetThemeButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-semibold font-freesentation items-center justify-center bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300 ease-in-out">
      <main className="p-4">
        <h1 className="text-2xl text-primary-light dark:text-primary-dark">
          다크모드 테스트
        </h1>
      </main>

      <section className="flex flex-col gap-4 p-4">
        <p className="text-text-light dark:text-text-dark">
          이 문장은 다크 모드에 따라 텍스트 색상이 변경됩니다.
        </p>

        <button className="p-2 bg-primary-light dark:bg-primary-dark text-background-light dark:text-background-dark rounded-md">
          Primary 버튼
        </button>

        <button className="p-2 bg-background-light dark:bg-background-dark border border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark rounded-md">
          배경 변경 버튼
        </button>

        <button className="p-2 bg-text-light dark:bg-text-dark text-background-light dark:text-background-dark rounded-md">
          텍스트 변경 버튼
        </button>
      </section>

      <footer className="mt-10">푸터</footer>

      <SetThemeButton />
    </div>
  );
}
