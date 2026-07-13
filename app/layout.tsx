import type { Metadata } from "next";
import "./globals.css";
import Chatbot from "@/app/components/Chatbot";

export const metadata: Metadata = {
  title: "Pattapon Thongnak (New) | Smart Factory & IoT Presale Engineer",
  description:
    "Portfolio of Pattapon Thongnak, an IoT presale engineer focused on smart factory systems, MES, ThingWorx, Kepware, PLC integration, and Siemens NX automation.",
  keywords: [
    "IoT Presale Engineer Thailand",
    "Smart Factory Engineer",
    "ThingWorx Developer",
    "Automation Engineer",
    "Siemens NX Developer",
    "MES Engineer"
  ],
  openGraph: {
    title: "Pattapon Thongnak (New) | Smart Factory & IoT Presale Engineer",
    description:
      "Industrial IoT, MES, smart factory dashboards, and Siemens NX automation portfolio.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
