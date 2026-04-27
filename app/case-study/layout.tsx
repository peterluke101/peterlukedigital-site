import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study — Peter Luke Digital",
  description: "See how Peter Luke Digital helped a local business go from invisible online to fully booked — professional site, SEO, and social included.",
  alternates: {
    canonical: "/case-study",
  },
  openGraph: {
    title: "Case Study — Peter Luke Digital",
    description: "See how Peter Luke Digital helped a local business go from invisible online to fully booked.",
    url: "https://peterlukedigital.com/case-study",
  },
};

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
