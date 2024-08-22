import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { companyInfo } from "./companyInfo";
import Footer from "./components/Footer";
import Header from "./components/Header";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: companyInfo.name,
  description: companyInfo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
