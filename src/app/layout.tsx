import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "3D Text",
  description:
    "3D Text from bruno simon's threejs journey course. Made with Next.js app router and react-three-fiber.",
  authors: [{ name: "Sameer Jadav", url: "https://sameerjadav.me" }],
  creator: "Sameer Jadav",
  publisher: "Vercel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "3D Text",
    description:
      "3D Text from bruno simon's threejs journey course. Made with Next.js app router and react-three-fiber.",
    url: "https://3d-text-sameerjadav.vercel.app",
    siteName: "3D Text",
    images: [
      {
        url: "https://3d-text-sameerjadav.vercel.app/og.png",
        width: 1200,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Text",
    description:
      "3D Text from bruno simon's threejs journey course. Made with Next.js app router and react-three-fiber.",
    creator: "@SameerJadav_",
    site: "@SameerJadav_",
    images: ["https://3d-text-sameerjadav.vercel.app/og.png"],
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
