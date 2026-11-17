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
            className="mb-5 w-44 sm:w-52 md:w-60 max-w-full object-contain"
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
            {
              icon: MapPin,
              text: footer.contact.address,
              href: "#contact",
              label: "View our address in contact section",
            },
            {
              icon: Phone,
              text: footer.contact.phone,
              href: `tel:${footer.contact.phone.replace(/[\s()-]/g, "")}`,
              label: `Call ${footer.contact.phone}`,
            },
            {
              icon: Mail,
              text: footer.contact.email,
              href: `mailto:${footer.contact.email}`,
              label: `Email ${footer.contact.email}`,
            },
          ].map(({ icon: C, text, href, label }) => (
            <a
              key={text}
              href={href}
              aria-label={label}
              className="group mb-4 flex items-center gap-3 text-sm text-violet-100/90 transition hover:text-white"
            >
              <span className="rounded-lg bg-white/10 p-2 transition group-hover:bg-white/20">
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
          {(
            footer.socialLinks || [
              { name: "Facebook", href: "https://facebook.com/onemoresmile" },
              { name: "Instagram", href: "https://instagram.com/onemoresmile" },
              { name: "YouTube", href: "https://youtube.com/@onemoresmile" },
              {
                name: "LinkedIn",
                href: "https://linkedin.com/company/onemoresmile",
              },
            ]
          ).map((item) => {
            const iconMap: Record<string, typeof Facebook> = {
              Facebook,
              Instagram,
              YouTube: Youtube,
              LinkedIn: Linkedin,
            };
            const C = iconMap[item.name] || Facebook;
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${item.name} page (opens in a new tab)`}
                className="rounded-full border border-white/40 p-2 transition hover:bg-white/15"
              >
                <C size={14} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
