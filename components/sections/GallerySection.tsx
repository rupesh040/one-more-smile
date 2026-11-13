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

export default function GallerySection() {
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
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-18">
      <Reveal>
        <Heading data={gallery} center />
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {gallery.items.map((item, i) => (
            <a
              href="#contact"
              key={item.image}
              aria-label={`${item.label} — get involved`}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={item.image}
                alt={item.label}
                loading="lazy"
                className="aspect-[1.5] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/75 to-transparent p-4 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="text-sm font-medium text-white">
                  {item.label}
                </span>
                <ArrowUpRight className="ml-auto text-white" size={18} />
              </div>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
