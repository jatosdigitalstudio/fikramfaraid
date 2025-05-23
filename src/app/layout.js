import { Bitter, Nunito_Sans } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const fontStyle = Bitter({
  variable: "--font-style",
  subsets: ["latin"],
});

const fontText = Nunito_Sans({
  variable: "--font-text",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fikram Faraid & Co",
  description: "Law Office, Attorney, & Counsellor at Law",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontStyle.variable} ${fontText.variable} font-text antialiased`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
