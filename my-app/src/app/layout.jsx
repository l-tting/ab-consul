import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://ab-consul.com"),

  title: "Startup Consulting & MVP Development for Growth | AB Consul",

  description:
    "Startup consulting and MVP development to help you launch, grow, and increase revenue. Build faster with data-driven systems and expert guidance.",

  keywords: [
    "startup consulting",
    "MVP development",
    "business consulting",
    "startup growth",
    "data driven consulting",
  ],

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Startup Consulting & MVP Development for Growth | AB Consul",
    description:
      "Startup consulting and MVP development to help you launch, grow, and increase revenue.",
    url: "https://ab-consul.com",
    siteName: "AB Consul",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Startup Consulting & MVP Development for Growth | AB Consul",
    description:
      "Launch and grow your startup with data-driven systems and expert consulting.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-stone-100">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

