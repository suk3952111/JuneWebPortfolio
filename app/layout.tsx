import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
