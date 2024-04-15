import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "CATCOIN Token price today, CAT to USD price, marketcap",
  description:
    "The price of CatCoin Token (CAT)  today 24-hour trading volume . Live Price Chart and other useful information about Catcoin.com $CAT the most memeable memecoin on Blockchain",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bg`}>{children}</body>
    </html>
  );
}
