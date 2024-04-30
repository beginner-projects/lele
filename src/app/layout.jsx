import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

export const metadata = {
  title: "The Speed",
  description: "Normal is not our way",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
