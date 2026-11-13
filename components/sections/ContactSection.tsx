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
import DonateSection from "./DonateSection";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
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
      id="contact"
      className="mx-auto max-w-7xl px-6 pb-20 pt-18 "
    >
      <Reveal className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>{contact.cursiveText}</Eyebrow>
          <h2 className="text-4xl font-bold tracking-tight text-brand">
            {contact.heading}
          </h2>
          <p className="mt-3 max-w-md text-base leading-relaxed text-zinc-600">
            {contact.description}
          </p>
          <form
            className="mt-8 grid grid-cols-2 gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <label className="text-sm font-medium">
              {contact.fields.name}
              <input
                required
                name="name"
                autoComplete="name"
                placeholder="Your name"
                className="mt-2 w-full rounded-md border border-zinc-200 bg-white px-4 py-3.5 text-base outline-none focus:border-brand focus:ring-2 focus:ring-violet-100"
              />
            </label>
            <label className="text-sm font-medium">
              {contact.fields.email}
              <input
                required
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-md border border-zinc-200 px-4 py-3.5 text-base outline-none focus:border-brand focus:ring-2 focus:ring-violet-100"
              />
            </label>
            <label className="col-span-2 text-sm font-medium">
              {contact.fields.phone}
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Phone number"
                className="mt-2 w-full rounded-md border border-zinc-200 px-4 py-3.5 text-base outline-none focus:border-brand focus:ring-2 focus:ring-violet-100"
              />
            </label>
            <label className="col-span-2 text-sm font-medium">
              {contact.fields.message}
              <textarea
                required
                name="message"
                placeholder="How would you like to help?"
                rows={4}
                className="mt-2 w-full resize-y rounded-md border border-zinc-200 px-4 py-3.5 text-base outline-none focus:border-brand focus:ring-2 focus:ring-violet-100"
              />
            </label>
            <button
              type="submit"
              className="col-span-2 mt-1 inline-flex w-fit items-center gap-4 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-800"
            >
              {contact.button}
              <ArrowRight size={16} />
            </button>
            {sent && (
              <p
                role="status"
                className="col-span-2 rounded-lg bg-lavender p-3 text-sm leading-relaxed text-brand"
              >
                This is a demo form; your message has not been sent. Please
                email {footer.contact.email} to get in touch.
              </p>
            )}
          </form>
        </div>
        <DonateSection />
      </Reveal>
    </section>
  );
}
