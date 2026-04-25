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
  title: "Peter Luke Digital | Free Website + SEO for Growing Businesses",
  description:
    "We build your website for free — you invest in growth. $800/mo gets you a professional site, 2 SEO blog articles, and 30 social posts per month. Site is yours to keep after 6 months.",
  keywords: [
    "free website design",
    "web design for small business",
    "SEO for medical practices",
    "website design Fort Lauderdale",
    "digital marketing agency",
    "free website build",
    "content marketing",
    "Peter Luke Digital",
    "web design for clinics",
    "medical website design",
  ],
  authors: [{ name: "Pete Luke", url: "https://peterlukedigital.com" }],
  creator: "Peter Luke Digital",
  publisher: "Peter Luke Digital",
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
    title: "Peter Luke Digital | Free Website + SEO for Growing Businesses",
    description:
      "We build your website for free. You invest in growth. $800/mo — professional site, SEO content, and social media. Site is yours after 6 months.",
    url: "https://peterlukedigital.com",
    siteName: "Peter Luke Digital",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/images/PLD-branding-guide.jpg",
        width: 1200,
        height: 630,
        alt: "Peter Luke Digital — Free Website for Growing Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peter Luke Digital | Free Website + SEO for Growing Businesses",
    description:
      "We build your website for free. You invest in growth. $800/mo gets you a site, SEO, and social — site is yours after 6 months.",
    images: ["/assets/images/PLD-branding-guide.jpg"],
    creator: "@peterluke101",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://peterlukedigital.com/#business",
      name: "Peter Luke Digital",
      url: "https://peterlukedigital.com",
      logo: "https://peterlukedigital.com/assets/images/logo-primary.png",
      image: "https://peterlukedigital.com/assets/images/PLD-branding-guide.jpg",
      description:
        "Peter Luke Digital builds professional websites for free — clients invest $800/month in SEO content and social media marketing. After 6 months, the website is theirs to keep.",
      email: "peter@peterlukedigital.com",
      founder: {
        "@type": "Person",
        name: "Pete Luke",
        jobTitle: "Founder, Peter Luke Digital",
      },
      areaServed: "United States",
      priceRange: "$$",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Marketing Services",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Growth Plan",
            description:
              "Free website build + 2 SEO blog articles + 30 social posts per month. $800/mo for 6 months, then the site is yours.",
            price: "800",
            priceCurrency: "USD",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "800",
              priceCurrency: "USD",
              unitText: "per month",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://peterlukedigital.com/#website",
      url: "https://peterlukedigital.com",
      name: "Peter Luke Digital",
      description: "Free website design and digital marketing for growing businesses.",
      publisher: { "@id": "https://peterlukedigital.com/#business" },
    },
    {
      "@type": "Review",
      "@id": "https://peterlukedigital.com/#review-goodkin",
      itemReviewed: { "@id": "https://peterlukedigital.com/#business" },
      author: {
        "@type": "Person",
        name: "Dr. Paul Goodkin",
        jobTitle: "CEO, Juvenis Medical LLC",
      },
      reviewBody:
        "I have never worked with any web firm that is this responsive, this fast, this proficient and this professional. Pete put together a brand-new, aesthetically pleasing, and technically superior site for me in less than 72 hours.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
