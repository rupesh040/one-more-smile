"use client";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Star,
  Quote,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  GraduationCap,
  HeartPulse,
  Users,
  Baby,
  Utensils,
  Lightbulb,
  Droplets,
  Leaf,
  Handshake,
  Target,
  Heart,
} from "lucide-react";
import { sections } from "../lib/content";
import type { Feature, IconName, SectionHeading } from "../lib/type";
const icons = {
  GraduationCap,
  HeartPulse,
  Users,
  Baby,
  Utensils,
  Lightbulb,
  Droplets,
  Leaf,
  Handshake,
  Target,
  Heart,
  MapPin,
};
export function Icon({
  name,
  className = "h-7 w-7",
}: {
  name: IconName;
  className?: string;
}) {
  const C = icons[name];
  if (!C) return null;
  return <C className={className} strokeWidth={1.5} />;
}
export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 motion-reduce:translate-y-0 motion-reduce:opacity-100 ${visible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}
    >
      {children}
    </div>
  );
}
export function Eyebrow({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={`mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[.18em] ${center ? "justify-center" : ""}`}
    >
      <span className="h-px w-11 bg-brand" />
      {children}
      {center && <span className="h-px w-11 bg-brand" />}
    </div>
  );
}
export function Heading({
  data,
  center = false,
}: {
  data: SectionHeading;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto mb-12 max-w-3xl text-center" : ""}>
      <Eyebrow center={center}>{data.cursiveText}</Eyebrow>
      <h2 className="text-[32px] font-bold leading-[1.16] tracking-[-.035em] sm:text-[40px] lg:text-[46px]">
        {data.headingPart1}{" "}
        <span className="text-brand">{data.headingPart2}</span>
      </h2>
      <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-base">
        {data.description}
      </p>
    </div>
  );
}
export function FeatureCard({ item }: { item: Feature }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-violet-100 bg-gradient-to-br from-white to-lavender p-6 lg:p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-100/60">
      <div className="absolute -bottom-8 -right-6 h-12 w-32 -rotate-[22deg] bg-violet-200/40" />
      <Icon name={item.icon} className="mb-4 h-9 w-9 text-brand" />
      <h3 className="mb-3 text-lg font-bold leading-snug">{item.title}</h3>
      <p className="relative text-base leading-relaxed text-zinc-600">
        {item.description}
      </p>
    </div>
  );
}
