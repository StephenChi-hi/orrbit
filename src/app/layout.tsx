import "./globals.css";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast"; // Import Toaster



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" text-[#454545] ">
        <Toaster />

        {children}
      </body>
    </html>
  );
}
