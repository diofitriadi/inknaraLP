import { Group } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import CardInknara from "./card";

export default function Header() {
  return (
    <div>
      <CardInknara>
        <Group position="apart">
          <Link href="/">
            <Image src="/logo.png" width={50} height={50} alt="inknara" />
          </Link>
        </Group>
      </CardInknara>
    </div>
  );
}
