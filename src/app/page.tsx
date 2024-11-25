"use client";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/footer/Footer";
import "./page.css";

export default function Home() {
  return (
    <>
      <main className="main-flex-col">
        <Navbar />
        <Hero />
        <Footer />
      </main>
    </>
  );
}
