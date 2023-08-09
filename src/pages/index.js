import { Inter } from "next/font/google";
import { Stack } from "@mantine/core";
import Hero from "@/src/components/Hero";
import Portfolio from "../components/Portfolio";
import Section2 from "../components/Section2";
import Footer from "../components/Footer";
import LayananInknara from "../components/LayananInknara";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <Stack>
        <Hero />
        <Section2 />
        <LayananInknara />
        <Portfolio />
        <Footer />
      </Stack>
    </div>
  );
}
