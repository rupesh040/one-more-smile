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
import StatisticsSection from "./StatisticsSection";

export default function HeroSection() {
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
    <section
      id="home"
      className="relative overflow-hidden bg-lavender pt-8 "
    >
      <div className="relative grid w-full items-center lg:min-h-[640px] lg:grid-cols-2">
        <div className="relative z-10 px-6 pb-10 pt-12 sm:px-12 lg:py-36 lg:pl-[max(2rem,calc((100vw-1280px)/2+1.5rem))] lg:pr-0">
          <div className="animate-enter">
            <Eyebrow>{banner.cursiveText}</Eyebrow>
            <h1 className="max-w-xl text-[42px] font-bold leading-[1.08] tracking-[-.045em] sm:text-6xl lg:text-[60px]">
              {banner.headingPart1}
              <br />
              <span className="text-brand">{banner.headingPart2}</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-700">
              {banner.description}
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-4 rounded-lg bg-brand px-6 py-3.5 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-800"
            >
              Make a Difference <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
        <div className="relative h-[350px] animate-enter overflow-hidden sm:h-[440px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[56%]">
          <img
            src={banner.image}
            alt="A smiling student in her classroom"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-lavender via-lavender/10 to-transparent lg:block" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-lavender to-transparent" />
        </div>
      </div>
      <StatisticsSection />
    </section>
  );
}
