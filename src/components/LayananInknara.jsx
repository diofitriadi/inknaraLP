import React from "react";
import WrapperInknara from "./Wrapper";
import { Box, Button, SimpleGrid, Text, Title } from "@mantine/core";
import useStyles from "@/lib/styles/hero";
import CardInknara from "./Card";
import Link from "next/link";

const LayananInknara = () => {
  const { classes, cx } = useStyles();
  return (
    <div>
      <WrapperInknara>
        <Title order={2} align="center" mb={40}>
          Layanan Inknara
        </Title>
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: 768, cols: 1 }]}>
          <CardInknara>
            <Text align="center" size="lg" component="h3">
              SEWA PRINTER
            </Text>
          </CardInknara>
          <CardInknara>
            <Text align="center" size="lg" component="h3">
              SEWA PHOTOCOPY
            </Text>
          </CardInknara>
          <CardInknara>
            <Text align="center" size="lg" component="h3">
              PENJUALAN TONER
            </Text>
          </CardInknara>
          <CardInknara>
            <Text align="center" size="lg" component="h3">
              PENJUALAN TINTA
            </Text>
          </CardInknara>
        </SimpleGrid>
        <Text mt={40} align="center" size="lg" component="h4">
          Masih Bingung Mau Menggunakan Layanan Yang Mana ?
        </Text>
        <Link href="https://api.whatsapp.com/send?phone=6281319985094" target="_blank">
          <Button
            size="lg"
            variant="gradient"
            gradient={{ from: "#666684", to: "#000030", deg: 35 }}
            w={"100%"}
          >
            {" "}
            Konsultasi Sekarang! FREE
          </Button>
        </Link>
      </WrapperInknara>
    </div>
  );
};

export default LayananInknara;
