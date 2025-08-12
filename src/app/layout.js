import { Poppins } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./components/ClientWrapper";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

// --- SEO defaults for the whole site ---
export const metadata = {
  // Make sure this matches your canonical host (no typos)
  metadataBase: new URL("https://www.videomate.io"),

  title: {
    default: "Videomate | Unlimited Video Editing Platform",
    template: "%s | Videomate",
  },
  description:
    "Videomate is a video editing platform that drives ROI with UGC, MGFX, and fast iteration.",
  robots: { index: true, follow: true },

  // Canonical for root; set page-specific canonicals in each page's metadata
  alternates: { canonical: "/" },

  openGraph: {
    type: "website",
    url: "https://www.videomate.io",
    siteName: "Videomate",
    title: "Videomate | Unlimited Video Editing Platform",
    description:
      "Video editing that drives ROI. UGC, MGFX, and fast iteration.",
    images: ["/og.png"], // 1200x630 recommended
  },
  twitter: {
    card: "summary_large_image",
    title: "Videomate | Unlimited Video Editing Platform",
    description:
      "Video editing that drives ROI. UGC, MGFX, and fast iteration.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Optional: add your GSC/Bing verification when you have the codes
  // verification: { google: "XXXX", other: { me: ["..."] } },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-522GLSGT');`,
          }}
        />
        {/* Optional: viewport (Next can infer, but explicit is fine) */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${poppins.variable} font-poppins antialiased`}>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-522GLSGT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ClientWrapper>
          {children}
          <SpeedInsights />
          <Analytics />
        </ClientWrapper>
      </body>
    </html>
  );
}
