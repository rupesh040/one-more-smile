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

export default function AboutSection() {
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
    <section id="about" className="mx-auto max-w-7xl px-6 py-18 ">
      <Reveal className="grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-md pb-3 pl-10">
          <div className="absolute left-[35%] top-[-18px] h-10 w-28 rounded-t-2xl bg-[#8e8af0]" />
          <img
            src={about.mainImage}
            alt="A volunteer helping children with their studies"
            className="relative aspect-square w-full rounded-2xl object-cover"
          />
          <img
            src={about.smallImage}
            alt="A young student smiling"
            className="absolute -left-1 bottom-0 aspect-[.85] w-[40%] rounded-2xl border-[6px] border-white object-cover"
          />
          <div className="absolute -bottom-2 left-[42%] -z-10 h-8 w-24 rounded-b-xl bg-brand" />
        </div>
        <div>
          <Heading data={about} />
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {about.features.map((f) => (
              <div key={f.title} className="rounded-xl bg-lavender p-5">
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-full bg-brand p-2.5 text-white">
                    <Icon name={f.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="text-base font-bold">{f.title}</h3>
                </div>
                <p className="text-base leading-relaxed text-zinc-600">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
