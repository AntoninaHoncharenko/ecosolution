import { Oswald, Fira_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.scss";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: "400",
});

const fira = Fira_Sans({
  subsets: ["latin"],
  variable: "--font-fira",
  weight: ["300", "400", "500", "600", "700"],
});

const gothic = localFont({
  src: "../public/fonts/Fontspring-DEMO-allroundgothic-thick.otf",
  display: "swap",
  variable: "--font-gothic",
});

const saygon = localFont({
  src: "../public/fonts/CASaygonTextTrial-Regular.otf",
  display: "swap",
  variable: "--font-saygon",
});

export const metadata = {
  title: "Ecosolution",
  description:
    "Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fira.variable} ${oswald.variable} ${gothic.variable} ${saygon.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
