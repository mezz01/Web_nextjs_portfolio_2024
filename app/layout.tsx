import type { Metadata } from "next";
import { Bodoni_Moda } from "next/font/google";
import "./globals.css";
import Header from "@/app/ui/header/header";

const bodoni = Bodoni_Moda({ 
  subsets: ["latin"],
  weight:["400", "800"],
  style:["italic", "normal"]
});

export const metadata: Metadata = {
  title: "Mezzat portfolio website",
  description: "Website portfolio of mohamed amine mezzat, me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="text-stone-300 bg-stone-950" lang="en">
      <body className={bodoni.className}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
