import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rohit Ananthan | Data Scientist",
  description:
    "Data Scientist specializing in ML, GenAI, and MLOps. Building intelligent systems with Python, GCP, and LLMs.",
  keywords: ["Rohit Ananthan", "Data Scientist", "Machine Learning", "GenAI", "MLOps", "Portfolio"],
  authors: [{ name: "Rohit Ananthan" }],
  openGraph: {
    title: "Rohit Ananthan | Data Scientist",
    description: "Building intelligent systems at the intersection of ML, GenAI & Data Engineering.",
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
