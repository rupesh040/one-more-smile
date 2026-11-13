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

export default function DonateSection() {
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
    <div className="flex flex-col justify-center rounded-3xl border border-violet-50 bg-gradient-to-br from-lavender to-[#eeecfa] p-8 sm:p-12">
      <Eyebrow>{donate.cursiveText}</Eyebrow>
      <a
        href="#contact"
        className="text-5xl font-bold tracking-[-.04em] sm:text-6xl"
      >
        {donate.headingPart1}{" "}
        <span className="text-brand">{donate.headingPart2}</span>
      </a>
      <p className="mt-5 max-w-md text-base leading-relaxed text-zinc-600">
        {donate.description}
      </p>
      <div className="mt-9 grid grid-cols-3">
        {donate.items.map((item, i) => (
          <a
            href="#contact"
            key={item.title}
            className={`flex flex-col items-center gap-3 px-2 text-center ${i ? "border-l border-violet-200" : ""}`}
          >
            <span className="rounded-full bg-brand p-4 text-white transition hover:scale-110">
              <Icon name={item.icon} />
            </span>
            <h3 className="max-w-24 text-sm font-semibold leading-relaxed">
              {item.title}
            </h3>
          </a>
        ))}
      </div>
    </div>
  );
}
