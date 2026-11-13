"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { sections } from "../../lib/content";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const isClickScrolling = useRef(false);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const header = sections.Header.variants.NGOHeader1;

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      setActiveSection(window.location.hash);
    }

    const sectionIds = header.links.map((link) => link.href.replace("#", ""));

    const handleScroll = () => {
      if (isClickScrolling.current) return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Bottom of page: activate last section (e.g. #contact)
      if (scrollPosition + windowHeight >= documentHeight - 60) {
        setActiveSection(`#${sectionIds[sectionIds.length - 1]}`);
        return;
      }

      // Top of page: activate first section (#home)
      if (scrollPosition < 80) {
        setActiveSection(`#${sectionIds[0]}`);
        return;
      }

      // Find the section currently in view
      const offset = 160;
      let currentSection = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= offset) {
            currentSection = id;
          }
        }
      }

      setActiveSection(`#${currentSection}`);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, [header.links]);

  const handleNavClick = (href: string) => {
    setActiveSection(href);
    isClickScrolling.current = true;
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }
    clickTimeoutRef.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 lg:px-8">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/90 bg-white/95 px-5 py-3 shadow-[0_8px_40px_-20px_#5145bd55] backdrop-blur-md lg:px-7"
      >
        <a
          href="#home"
          aria-label="One More Smile home"
          onClick={() => handleNavClick("#home")}
        >
          <img
            src={header.logo}
            alt="One More Smile Foundation"
            className="h-12 w-36 object-contain"
          />
        </a>
        <div className="hidden items-center gap-1 xl:gap-3 lg:flex">
          {header.links.map((l) => {
            const isActive = activeSection === l.href;
            return (
              <a
                key={l.name}
                href={l.href}
                onClick={() => handleNavClick(l.href)}
                className={`rounded-lg px-2.5 py-1.5 text-sm font-semibold transition-all duration-200 xl:px-3.5 xl:py-2 ${
                  isActive
                    ? "bg-brand text-white shadow-sm hover:text-white"
                    : "text-zinc-700 hover:bg-violet-50/60 hover:text-brand"
                }`}
              >
                {l.name}
              </a>
            );
          })}
        </div>
        <a
          href="#contact"
          onClick={() => handleNavClick("#contact")}
          className="ml-auto mr-3 flex items-center gap-2 rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-800 lg:ml-0 lg:mr-0"
        >
          <Heart size={15} />
          {header.button}
        </a>
        <button
          aria-label={menu ? "Close menu" : "Open menu"}
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
          className="p-2 lg:hidden"
        >
          {menu ? <X /> : <Menu />}
        </button>
      </nav>
      {menu && (
        <div className="mx-auto mt-2 flex max-w-7xl flex-col gap-1 rounded-xl bg-white p-4 shadow-lg lg:hidden">
          {header.links.map((l) => {
            const isActive = activeSection === l.href;
            return (
              <a
                key={l.name}
                href={l.href}
                onClick={() => {
                  handleNavClick(l.href);
                  setMenu(false);
                }}
                className={`rounded-lg px-3 py-2.5 text-base font-semibold transition ${
                  isActive
                    ? "bg-brand text-white"
                    : "text-zinc-700 hover:bg-violet-50/60 hover:text-brand"
                }`}
              >
                {l.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
