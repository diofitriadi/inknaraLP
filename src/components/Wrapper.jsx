import { Container } from "@mantine/core";

export default function WrapperInknara({ children }) {
  return (
    <div>
      <Container size="lg" my={50}>
        {children}
      </Container>
    </div>
  );
}
