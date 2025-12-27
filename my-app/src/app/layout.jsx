import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 1. Added flex, flex-col, and min-h-screen to the body */}
      <body className="flex flex-col min-h-screen bg-stone-50">
        <Navbar />
        
        {/* 2. Wrap children in a main tag with flex-grow */}
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}