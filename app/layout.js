import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ProVider from "./Redux/Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LoopBeat",
  description: "Perfect for a music player with loop and shuffle functions",
};

export default function RootLayout({ children }) {
  return (
    <ProVider>
  <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    </ProVider>
  
  );
}
