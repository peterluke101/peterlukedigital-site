import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  title: "Peter Luke Digital | Web Design for Medical Practices",
  description:
    "Peter Luke Digital builds high-converting websites for medical and wellness practices with design, SEO, and content included.",
  icons: {
    icon: "/assets/images/logo-icon.png",
    shortcut: "/assets/images/logo-icon.png",
    apple: "/assets/images/logo-icon.png",
  },
  metadataBase: new URL("https://peterlukedigital.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Peter Luke Digital | Web Design for Medical Practices",
    description:
      "Websites, SEO, and content for medical and wellness practices that need more patient bookings.",
    url: "https://peterlukedigital.com",
    siteName: "Peter Luke Digital",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Peter Luke Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peter Luke Digital | Web Design for Medical Practices",
    description:
      "Websites, SEO, and content for medical and wellness practices that need more patient bookings.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-background text-text antialiased">
        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
