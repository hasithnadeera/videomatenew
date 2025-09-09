import { Poppins } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./components/ClientWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.videomate.io"),
  title: { default: "Videomate | Unlimited Video Editing Platform", template: "%s | Videomate" },
  description: "Videomate is a video editing platform that drives ROI with UGC, MGFX, and fast iteration.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.videomate.io",
    siteName: "Videomate",
    title: "Videomate | Unlimited Video Editing Platform",
    description: "Video editing that drives ROI. UGC, MGFX, and fast iteration.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Videomate | Unlimited Video Editing Platform",
    description: "Video editing that drives ROI. UGC, MGFX, and fast iteration.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }) {
  const schemaData = [/* … your schema objects … */];

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Google Tag Manager – put this in <head> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NKC4RGC6');`,
          }}
        />
        {/* End GTM */}
      </head>

      <body className={`${poppins.variable} font-poppins antialiased`}>
        {/* GTM (noscript) – must be raw HTML, not JSX */}
        <div
          dangerouslySetInnerHTML={{
            __html: `
<noscript>
  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NKC4RGC6"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>`,
          }}
        />
        {/* End GTM (noscript) */}

        <ClientWrapper>
          {children}
          <SpeedInsights />
          <Analytics />
        </ClientWrapper>
      </body>
    </html>
  );
}
