"use client";
import { useState } from "react";
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
  Heart,
} from "lucide-react";
import { sections } from "../../lib/content";
import { Icon, Reveal, Eyebrow, Heading, FeatureCard } from "../ui";

export default function StatisticsSection() {
  const header = sections.Header.variants.NGOHeader1,
    banner = sections.Banner.variants.NGOBanner1,
    stats = sections.CompanyStatistics.variants.NGOStats1,
    about = sections.About.variants.NGOAbout1,
    services = sections.Services.variants.NGOServices1,
    why = sections.WhyChooseUs.variants.NGOWhyChooseUs1,
    gallery = sections.Gallery.variants.NGOGallery1,
    testimonial = sections.Testimonial.variants.NGOTestimonial1,
    contact = sections.Contact.variants.NGOContact1,
    donate = sections.Donate.variants.NGODonate1,
    footer = sections.Footer.variants.NGOFooter1;
  return (
    <div className="relative z-10 border-t border-white/80 bg-white/50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-6 py-8 md:grid-cols-4">
        {stats.stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex items-center justify-center gap-3 lg:gap-4 ${i ? "md:border-l md:border-violet-200" : ""}`}
          >
            <Icon name={s.icon} className="h-9 w-9 shrink-0 text-brand" />
            <div>
              <div className="text-3xl font-bold tracking-tight">{s.value}</div>
              <div className="mt-1 text-sm text-zinc-600">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
