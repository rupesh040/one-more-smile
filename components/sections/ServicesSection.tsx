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

export default function ServicesSection() {
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
      id="services"
      className="mx-auto max-w-7xl px-6 pt-4 pb-18 sm:pt-10 lg:py-18"
    >
      <Reveal>
        <Heading data={services} center />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((item) => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
