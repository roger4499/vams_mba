import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Graduation Scrapbook",
  description: "Cute scrapbook graduation website"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-4 md:p-8">{children}</main>
      </body>
    </html>
  );
}
