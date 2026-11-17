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

export default function WhyChooseUsSection() {
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
    <section id="why-us" className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24">
      <Reveal className="grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
        <div className="order-2 relative mx-auto w-full max-w-md p-4 lg:order-1">
          <div className="absolute left-0 top-0 h-1/2 w-1/3 border-l-[16px] border-t-[16px] border-brand" />
          <div className="absolute bottom-0 left-0 h-1/3 w-1/3 border-b-[16px] border-l-[16px] border-brand" />
          <img
            src={why.image}
            alt="Children building a brighter future through education"
            className="relative aspect-square w-full object-cover"
          />
        </div>
        <div className="order-1 lg:order-2">
          <Heading data={why} />
          <div className="mt-7 grid gap-x-8 gap-y-9 sm:grid-cols-2">
            {why.features.map((f) => (
              <div key={f.title} className="flex gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-lavender text-brand">
                  <Icon name={f.icon} />
                </span>
                <div>
                  <h3 className="text-base font-bold">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
