import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lasya Pamarthi | Software Engineer | AI, Backend, Cloud, Applied ML",
  description:
    "Portfolio for Lasya Pamarthi, a software engineer building AI-powered products across backend, cloud, and applied ML systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
