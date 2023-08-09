import { Inter } from "next/font/google";
import { Button } from "@mantine/core";
import styles from "@/styles/Home.module.css";
import { Stack } from "@mantine/core";
import Hero from "@/src/components/Hero";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      {/* <Stack> */}
        <Hero />
        <Footer />
      {/* </Stack> */}
    </div>
  );
}
