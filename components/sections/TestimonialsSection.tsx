"use client";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { sections } from "../../lib/content";
import { Heading, Reveal } from "../ui";

export default function TestimonialsSection() {
  const testimonial = sections.Testimonial.variants.NGOTestimonial1;
  const count = testimonial.items.length;
  const [index, setIndex] = useState(count);
  const [animated, setAnimated] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [visible, setVisible] = useState(1);
  const [moving, setMoving] = useState(false);
  const active = ((index % count) + count) % count;

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    const resize = () => setVisible(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    update(); resize();
    media.addEventListener('change', update);
    window.addEventListener('resize', resize);
    return () => { media.removeEventListener('change', update); window.removeEventListener('resize', resize); };
  }, []);

  function move(direction: number) {
    if (moving) return;
    setAnimated(true);
    setMoving(true);
    setIndex(current => current + direction);
  }

  useEffect(() => {
    if (hovered || focused || reducedMotion || moving) return;
    const timer = window.setTimeout(() => {
      setAnimated(true); setMoving(true); setIndex(current => current + 1);
    }, 4500);
    return () => window.clearTimeout(timer);
  }, [hovered, focused, reducedMotion, moving, index]);

  // Reset to the identical middle copy after each step for seamless wrapping.
  useEffect(() => {
    if (!moving) return;
    const timer = window.setTimeout(() => {
      setAnimated(false);
      setIndex(current => count + ((current % count) + count) % count);
      setMoving(false);
    }, reducedMotion ? 0 : 520);
    return () => window.clearTimeout(timer);
  }, [moving, count, reducedMotion]);

  return (
    <section id="testimonials" aria-label="Community testimonials" className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24">
      <Reveal>
        <Heading data={testimonial} center />
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Stories from the people we support"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setFocused(false); }}
          onKeyDown={event => {
            if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
            if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
          }}
        >
          <div className="overflow-hidden rounded-xl" id="testimonial-track">
            <div
              className={`flex motion-reduce:transition-none ${animated ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{ transform: `translateX(-${index * (100 / visible)}%)` }}
            >
              {[...testimonial.items, ...testimonial.items, ...testimonial.items].map((item, i) => (
                <div key={`${item.name}-${i}`} aria-hidden={i < index || i >= index + visible} className="flex shrink-0 px-3" style={{ width: `${100 / visible}%` }}>
                  <article className="relative h-full w-full overflow-hidden rounded-xl border border-violet-100 bg-gradient-to-br from-zinc-50 to-lavender p-6 lg:p-7">
                    <Quote aria-hidden="true" className="absolute right-5 top-6 h-10 w-10 fill-violet-200/40 text-violet-200/40" />
                    <div className="relative flex items-center gap-3">
                      <img src={item.image} alt={item.name} loading="lazy" className="h-14 w-14 shrink-0 rounded-full border-2 border-white object-cover" />
                      <div>
                        <h3 className="text-base font-bold">{item.name}</h3>
                        <p className="mt-1 text-sm text-zinc-500">{item.title}</p>
                        <div aria-label={`${item.rating} out of 5 stars`} className="mt-2 flex gap-1 text-brand">
                          {Array.from({ length: item.rating }, (_, star) => <Star key={star} aria-hidden="true" className="h-3.5 w-3.5 fill-current" />)}
                        </div>
                      </div>
                    </div>
                    <p className="relative mt-6 pb-2 text-base leading-7 text-zinc-700">“{item.quote}”</p>
                    <div className="absolute -bottom-7 -right-8 h-10 w-48 -rotate-[15deg] bg-violet-200/50" />
                  </article>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-5">
            <button type="button" aria-label="Previous testimonial" aria-controls="testimonial-track" disabled={moving} onClick={() => move(-1)} className="flex h-12 w-12 items-center justify-center rounded-full border border-violet-200 bg-white text-brand transition hover:bg-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand disabled:opacity-50"><ArrowLeft size={20} /></button>
            <div className="flex gap-2" aria-hidden="true">
              {testimonial.items.map((item, i) => <span key={item.name} className={`h-2 rounded-full transition-all ${active === i ? 'w-6 bg-brand' : 'w-2 bg-violet-200'}`} />)}
            </div>
            <button type="button" aria-label="Next testimonial" aria-controls="testimonial-track" disabled={moving} onClick={() => move(1)} className="flex h-12 w-12 items-center justify-center rounded-full border border-violet-200 bg-white text-brand transition hover:bg-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand disabled:opacity-50"><ArrowRight size={20} /></button>
          </div>
          <p className="sr-only" aria-live={focused ? 'polite' : 'off'}>Testimonial {active + 1} of {count}: {testimonial.items[active].name}</p>
        </div>
      </Reveal>
    </section>
  );
}
