import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export const metadata = {
  title: "A page for Isaac Miller's CS 327 Project",
  description:
    "A template that is being repurposed for my own personal site for CS 327. This template was chosen because I have never integrated Auth, Prisma, or Postgres into a website before.",
  twitter: {
    card: "summary_large_image",
    title: "Isaac Miller's CS 327 Project",
    description:
      "A template that is being repurposed for my own personal site for CS 327. This template was chosen because I have never integrated Auth, Prisma, or Postgres into a website before.",
    creator: "@isaacbmiller",
  },
  metadataBase: new URL("https://isaacmiller.dev"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
