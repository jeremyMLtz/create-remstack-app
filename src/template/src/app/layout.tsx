import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RemStack App",
  description: "Fullstack Next App Stack",
};

// ONCE CLERK ENV TOKENS ARE SET UP, SIMPLE WRAP EVERYTHING IN THE ClerkProvider component
// <ClerkProvider>
//   <html lang='en'>
//     <body className={openSans.className}>{children}</body>
//   </html>
// </ClerkProvider>

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
