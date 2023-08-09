import { Paper } from "@mantine/core";

export default function CardInknara({ children }) {
  return (
    <div>
      <Paper shadow="xs" p="md" radius="lg" withBorder py={20}>
        {children}
      </Paper>
    </div>
  );
}
