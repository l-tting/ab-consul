import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import ChatWidgetLoader from "@/components/ChatWidgetLoader";

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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-blue-950 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        {/* <ABLogo/> */}

        <Footer />
        <ChatWidgetLoader />
      </body>
    </html>
  );
}

