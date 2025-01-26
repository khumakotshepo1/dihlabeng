import Navbar from "@/components/_Header/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive",
  description: "Executive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
