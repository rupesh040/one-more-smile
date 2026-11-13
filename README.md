# One More Smile
Next.js App Router landing page, styled with Tailwind CSS v4.

## Run
```sh
npm install
npm run dev
```

## Content
- `lib/content.json`: image-related copy and local image paths, organized as templateComponents → shared/pages and sections → variants.
- `lib/type.ts`: content interfaces.
- `lib/content.ts`: typed JSON export.
- `components/landing-page.tsx`: responsive sections and interactions.
- `public/images`: crops taken directly from the supplied reference image, not external photographs. Their resolution is limited by the source.

Navigation links go to their corresponding sections. All CTA buttons, gallery links, donation links, and social/contact links lead to #contact. The mobile-menu toggle and form submission are local interactions. The contact form validates inputs but does not send or store messages; it explicitly displays this limitation after submission. Connect a backend before production. Contact details, impact numbers and testimonials reproduce the reference and should be verified before publication.

Entrance and IntersectionObserver-based scroll animations respect reduced-motion preferences. Styling uses Tailwind utilities; globals.css only includes Tailwind setup, base settings, the entrance keyframes and reduced-motion support.
