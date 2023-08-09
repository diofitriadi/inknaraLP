import { Inter } from "next/font/google";
import { Stack } from "@mantine/core";
import Hero from "@/src/components/Hero";
import Section2 from "../components/Section2";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <Stack>
        <Hero />
        <Section2 />
        <Footer />
      </Stack>
    </div>
  );
}
