import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./_context/LanguageContext";
import ThemeScript from "./_components/ThemeScript";
import Nav from "./_components/Nav";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "우준석",
  description: "준석's 웹 포폴 겸 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* 인라인 스크립트로 초기 테마 설정 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
                const initialTheme = darkQuery.matches ? "dark" : "light";
                document.documentElement.classList.add(initialTheme);
                document.documentElement.dataset.theme = initialTheme;
              })();
            `,
          }}
        />
        <ThemeScript />
      </head>
      <body className="antialiased font-freesentation">
        <LanguageProvider>
          <Toaster />
          <Nav />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
