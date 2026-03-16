import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LoanConnect — Your Bridge to Better Loans",
  description:
    "LoanConnect connects borrowers with trusted lenders. One application, multiple offers, zero hassle. Personal, business, home, auto, education loans and more.",
  openGraph: {
    title: "LoanConnect — Your Bridge to Better Loans",
    description:
      "One application, multiple offers, zero hassle. Find the perfect loan today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
