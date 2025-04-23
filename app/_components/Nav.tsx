"use client";

import React, { useState, useEffect } from "react";
import { Languages, Sun, Moon } from "lucide-react";
import { useLanguage } from "../_context/LanguageContext";
import { translations } from "../_constants/translations";
import { useTheme } from "../_hooks/useTheme";
import { toast } from "sonner";

const Nav = () => {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ko" : "en");
  };

  const t = translations[language].nav;

  return (
    <nav
      className={`fixed w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/50 dark:bg-gray-900/95 shadow-lg backdrop-blur-lg py-4"
          : "py-6"
      } z-50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
            {t.name}
          </h1>
          <div className="flex items-center gap-6">
            <a
              onClick={() => toast.warning(`${t.blogWarning}`)}
              className="px-4 py-2 rounded-lg font-medium transition-all duration-300 text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 hover:cursor-pointer"
            >
              <span className="transition-opacity duration-300">{t.blog}</span>
            </a>
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg transition-all duration-300 flex items-center gap-2 bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <Languages size={20} />
              <span className="text-sm font-medium">
                {language.toUpperCase()}
              </span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all duration-300 bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-yellow-400 dark:hover:bg-gray-700"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
