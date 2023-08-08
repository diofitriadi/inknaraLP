import React from "react";
import WrapperInknara from "./Wrapper";
import { Text, Title } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";

const CustomCarousel = ({ imagesData }) => (
  <Carousel
    withIndicators
    height={200}
    slideSize="33.333333%"
    slideGap="md"
    loop
    align="center"
    breakpoints={[
      { maxWidth: "md", slideSize: "50%" },
      { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
    ]}
  >
    {imagesData.map((src, index) => (
      <Carousel.Slide key={index}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image alt={index} width={300} height={200} src={src} />
        </div>
      </Carousel.Slide>
    ))}
  </Carousel>
);

export default CustomCarousel;
