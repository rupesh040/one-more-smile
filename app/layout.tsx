import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "One More Smile | Together, a brighter tomorrow",
  description:
    "Bringing hope and support to those in need through education, healthcare, and community development.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
