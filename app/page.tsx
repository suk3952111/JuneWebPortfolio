"use client";

import React from "react";
import { useLanguage } from "./_context/LanguageContext";
import { translations } from "./_constants/translations";
import Image from "next/image";
import { Github, Linkedin, Mail, Globe, Code2 } from "lucide-react";
import NextjsIcon from "./_components/icons/NextjsIcon";
import ReactIcon from "./_components/icons/ReactIcon";
import SeaPicture from "@/app/public/SEA.jpg";

// Import representative images for Next.js projects
import ChatAppImage from "@/app/public/chat-app.png";
import MoilkjiImage from "@/app/public/Moilkji 1.png";
import EcommerceAppImage from "@/app/public/My E-commerce App 1.png";
import SynamImage from "@/app/public/synamon 1.png";

// Import representative images for React projects
import TickyTockyImage from "@/app/public/TickyTocky 1.png";
import TriptierImage from "@/app/public/tripterior 1.png";
import TechStackCarousel from "./_components/TechStackCarousel";

const projectImages = {
  nextjs: [TriptierImage, MoilkjiImage, SynamImage, TickyTockyImage],
  react: [ChatAppImage, EcommerceAppImage],
};

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900 pattern-bg">
      {/* 히어로 섹션 */}
      <section className="relative pt-32 lg:pt-40 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 py-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
                {t.title}
              </h2>
              <h3 className="text-xl lg:text-2xl font-medium mb-6 text-gray-600 dark:text-gray-300">
                {t.subtitle}
              </h3>
              <p className="text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-2xl">
                {t.description}
              </p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <a
                  href="https://github.com/suk3952111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full transition-all duration-300 transform hover:scale-110 bg-white text-gray-700 hover:bg-gray-50 shadow-md dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/june-seok-woo-445081273/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full transition-all duration-300 transform hover:scale-110 bg-white text-gray-700 hover:bg-gray-50 shadow-md dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:suk3952111@naver.com"
                  className="p-3 rounded-full transition-all duration-300 transform hover:scale-110 bg-white text-gray-700 hover:bg-gray-50 shadow-md dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 relative flex items-center justify-center">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden ring-4 ring-offset-8 ring-offset-gray-50 ring-gray-200 dark:ring-gray-700 dark:ring-offset-gray-900 transition-all duration-300 transform hover:rotate-3">
                <Image
                  src={SeaPicture}
                  alt="Profile"
                  width={320}
                  height={320}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="carousel">
        <TechStackCarousel />
      </section>
      {/* 프로젝트 섹션 */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl lg:text-4xl font-bold mb-16 text-gray-800 dark:text-white text-center">
            {t.projects}
          </h3>

          {/* Next.js 프로젝트 */}
          <div className="mb-24">
            <h4 className="text-2xl font-semibold mb-12 text-gray-700 dark:text-gray-200 flex items-center gap-3">
              <NextjsIcon />
              {t.nextjsProjects}
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.projectDescriptions.nextjs.map((project, index) => (
                <div
                  key={`nextjs-${project.name}`}
                  className="rounded-xl overflow-hidden project-card bg-gray-50 dark:bg-gray-800 shadow-lg"
                >
                  <div className="relative overflow-hidden">
                    <div className="relative overflow-hidden h-48">
                      <Image
                        src={projectImages.nextjs[index]}
                        alt={`Next.js Project ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 opacity-20"></div>
                  </div>
                  <div className="p-8 h-full">
                    <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                      {project.name}
                    </h4>
                    <p className="mb-6 text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 bg-gray-200 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                      >
                        <Globe size={16} className="mr-2" />
                        {t.viewLive}
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 bg-gray-200 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                      >
                        <Code2 size={16} className="mr-2" />
                        {t.viewCode}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* React 프로젝트 */}
          <div>
            <h4 className="text-2xl font-semibold mb-12 text-gray-700 dark:text-gray-200 flex items-center gap-3">
              <ReactIcon />
              {t.reactProjects}
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.projectDescriptions.react.map((project, index) => (
                <div
                  key={`react-${project.name}`}
                  className="rounded-xl overflow-hidden project-card bg-gray-50 dark:bg-gray-800 shadow-lg"
                >
                  <div className="relative overflow-hidden">
                    <div className="relative overflow-hidden h-48">
                      <Image
                        src={projectImages.react[index]}
                        alt={project.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 opacity-20"></div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                      {project.name}
                    </h4>
                    <p className="mb-6 text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 bg-gray-200 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                      >
                        <Globe size={16} className="mr-2" />
                        {t.viewLive}
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 bg-gray-200 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                      >
                        <Code2 size={16} className="mr-2" />
                        {t.viewCode}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}
