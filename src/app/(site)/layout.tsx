import { getFooter, getHeader } from "@/lib/api";
import Header from "@/components/Header";
import NivaanFooter from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import FloatingButtonSite from "@/components/FloatingButtonSite";
import "@/app/style/site.css";

export const metadata = {
  authors: [
    {
      name: "Nivaan Care",
      url: "https://nivaancare.com",
    },
  ],
  publisher: "Nivaan Care",
  openGraph: {
    title: "India’s Most Advanced Pain Management Clinic | Nivaan Care",
    siteName: "Nivaan Care",
    url: "https://nivaancare.com/",
    description:
      "Nivaan Care is India’s most advanced pain management clinic, focused on non-surgical pain relief through expert doctors, modern technology, and personalized care.",
    type: "website",
    images: [
      {
        url: "https://nivaancare.com/images/logo.svg",
        width: 1200,
        height: 630,
        alt: "Nivaan Care Logo",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const res = await getHeader();
  const res1 = await getFooter();

  return (
    <>
      <Header menu={res.items} />
      {children}
      <ScrollToTopButton />
      <FloatingButtonSite />
      <NivaanFooter menu={res1.items} />
    </>
  );
}
