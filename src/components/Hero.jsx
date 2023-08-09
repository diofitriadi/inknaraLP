import useStyles from "@/lib/styles/hero";
import { Title, Text, Container, Button, Overlay } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Hero() {
  const { classes, cx } = useStyles();

  const router = useRouter();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />
      <Image
        src="/logo.png"
        alt="Logo"
        className={classes.logo}
        width={50}
        height={50}
      />

      <div className={classes.inner}>
        <Title className={classes.title} mt={30}>
          SELAMAT DATANG !
        </Title>
        <Text className={classes.title}>
          <Text component="span" inherit className={classes.highlight}>
            INKNARA{" "}
          </Text>
          SIAP MELAYANI
        </Text>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Sejak 2004, Berpengalaman 20 Tahun Mendukung Perusahaan & Industri
            Di JABODETABEK, Banten, Jawa Barat Dan Jawa Tengah.
          </Text>
          <Text size="lg" className={classes.description}>
            INKNARA Using The Korea’s Technology Printing. Significantly
            Decreasing Printing Cost For Almost 50% With “0 Hustle”
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            variant="white"
            size="lg"
            // onClick={() => router.push("/program")}
          >
            Learn More
          </Button>
          <Button
            className={cx(classes.control, classes.secondaryControl)}
            variant="white"
            size="lg"
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=6281319985094",
                "_blank"
              )
            }
          >
            Contact Now
          </Button>
        </div>
      </div>
    </div>
  );
}
