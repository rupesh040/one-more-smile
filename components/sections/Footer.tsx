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

export default function Footer() {
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
    <footer className="bg-gradient-to-br from-[#28205e] to-[#100e32] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.35fr_.8fr_1fr] md:gap-12">
        <div className="md:border-r md:border-white/20 md:pr-12">
          <img
            src={footer.logo}
            alt="One More Smile — non-profit organization"
            className="mb-5 w-60 max-w-full"
          />
          <p className="max-w-sm text-base leading-relaxed text-violet-100/80">
            {footer.description}
          </p>
        </div>
        <div className="md:border-r md:border-white/20">
          <h3 className="mb-5 text-lg font-bold">
            Quick Links
            <span className="mt-2 block h-px w-10 bg-violet-300" />
          </h3>
          <div className="flex flex-col gap-2">
            {footer.quickLinks.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="w-fit text-sm text-violet-100/80 transition hover:text-white"
              >
                {l.name}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-5 text-lg font-bold">
            Contact Info
            <span className="mt-2 block h-px w-10 bg-violet-300" />
          </h3>
          {[
            { icon: MapPin, text: footer.contact.address },
            { icon: Phone, text: footer.contact.phone },
            { icon: Mail, text: footer.contact.email },
          ].map(({ icon: C, text }) => (
            <a
              key={text}
              href="#contact"
              className="mb-4 flex items-center gap-3 text-sm text-violet-100/90"
            >
              <span className="rounded-lg bg-white/10 p-2">
                <C size={17} />
              </span>
              {text}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 border-t border-white/20 px-6 py-5 sm:flex-row">
        <p className="text-sm text-violet-100/80">{footer.copyright}</p>
        <div className="flex gap-3">
          {[
            { icon: Facebook, name: "Facebook" },
            { icon: Instagram, name: "Instagram" },
            { icon: Youtube, name: "YouTube" },
            { icon: Linkedin, name: "LinkedIn" },
          ].map(({ icon: C, name }) => (
            <a
              key={name}
              href="#contact"
              aria-label={`${name} — contact us`}
              className="rounded-full border border-white/40 p-2 transition hover:bg-white/15"
            >
              <C size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
