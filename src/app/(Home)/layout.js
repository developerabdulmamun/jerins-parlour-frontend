import { Poppins } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/shared/Navbar";
import Provider from "../_provider";
import Footer from "@/components/shared/Footer";
import AuthProvider from "@/providers/AuthProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Jerin's Parlour",
  description: "Beauty saloon for every women",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthProvider>
          <Provider>
            <Navbar />
            <div className="min-h-screen">{children}</div>
            <Footer />
          </Provider>
        </AuthProvider>
      </body>
    </html>
  );
}
