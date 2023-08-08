import { Inter } from "next/font/google";
import { Stack } from "@mantine/core";
import Hero from "@/src/components/Hero";
import Portfolio from "../components/Portfolio";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Stack>
        <Hero />
        <Portfolio />
      </Stack>
    </div>
  );
}
