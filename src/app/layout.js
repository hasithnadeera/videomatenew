import { Poppins } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./components/ClientWrapper";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: 'swap',
});

export const metadata = {
  title: "Videomate | Unlimited Video Editing Platform",
  description: "Videomate is a video editing platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
