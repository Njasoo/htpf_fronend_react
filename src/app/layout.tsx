import Platform from "@/ui/Platform";
import "./globals.css";
import Navbar from "@/ui/Navbar";
import Footer from "@/ui/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pageList = [
    { text: "总热榜", path: "/newslist" },
    { text: "词云", path: "/wordcloud" },
  ];

  return (
    <html>
      <body>
        <Navbar pageList={pageList} />
        <Platform />
        {children}
        <Footer />
      </body>
    </html>
  );
}
