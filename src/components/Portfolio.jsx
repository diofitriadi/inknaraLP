import React from "react";
import WrapperInknara from "./Wrapper";
import { Button, Text, Title } from "@mantine/core";
import CustomCarousel from "./Carousel";
import {
  publicSector,
  corporateSector,
  industrySector,
} from "@/lib/data/portfolionImages";

const Portfolio = () => {
  return (
    <WrapperInknara>
      <Title order={2} align="center" mb="lg">
        Portfolio
      </Title>

      <Text mb="lg" size="lg" fw={700}>
        Public Sector
      </Text>
      <CustomCarousel imagesData={publicSector} />

      <Text mt="lg" mb="lg" size="lg" fw={700}>
        Corporate Sector
      </Text>
      <CustomCarousel imagesData={corporateSector} />

      <Text mt="lg" mb="lg" size="lg" fw={700}>
        Industry
      </Text>
      <CustomCarousel imagesData={industrySector} />
      <Button color="teal" mt={40} w={"100%"} size="lg">
        Lihat Portfolio Lengkap
      </Button>
    </WrapperInknara>
  );
};

export default Portfolio;
