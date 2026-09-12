import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "The Conscious Diver",
    template: "%s | The Conscious Diver",
  },
  description:
    "The Conscious Diver is the home of Conscious Diver Expeditions (scuba travel & conservation) and The Conscious Diver Co. (eco-apparel & gear).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
