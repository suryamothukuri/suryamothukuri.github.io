import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Surya Mothukuri | Data Scientist",
  description:
    "Data Scientist and AI Engineer building predictive models, data products, and scalable cloud workflows across healthcare, operations, and enterprise automation.",
  keywords: ["Surya Teja Mothukuri", "Data Scientist", "Machine Learning", "GenAI", "MLOps", "Portfolio"],
  authors: [{ name: "Surya Teja Mothukuri" }],
  openGraph: {
    title: "Surya Teja Mothukuri | Data Scientist",
    description: "Data Scientist and AI Engineer building predictive models, data products, and scalable cloud workflows across healthcare, operations, and enterprise automation.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise">{children}</body>
    </html>
  );
}
