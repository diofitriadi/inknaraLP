import React from 'react'
import { Container, Box, Title, Grid, Text, Paper, Button, SimpleGrid } from '@mantine/core'
import styled from '@emotion/styled';

const StyledPaper = styled(Paper)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Section2 = () => {
    return (
        <section>
            <Container py={100}>
                <Box mb={60}>
                    <Title order={2} mb={32} align="center">Inknara Overview</Title>
                    <SimpleGrid
                        breakpoints={[
                            { minWidth: 'sm', cols: 1 },
                            { minWidth: 'md', cols: 2 },
                            { minWidth: 1200, cols: 3 },
                        ]}>
                        <Paper shadow="sm" radius="md" p="xl" py={50} withBorder align="center">
                            <Title order={3} mb={8} color='blue'>20+</Title>
                            <Text size={18}>
                                Years Of Experience
                            </Text>
                        </Paper>
                        <Paper shadow="sm" radius="md" p="xl" py={50} withBorder align="center">
                            <Title order={3} mb={8} color='blue'>8</Title>
                            <Text size={18}>
                                Province Coverage
                            </Text>
                        </Paper>
                        <Paper shadow="sm" radius="md" p="xl" py={50} withBorder align="center">
                            <Title order={3} mb={8} color='blue'>AAA</Title>
                            <Text size={18}>
                                Service Excellence
                            </Text>
                        </Paper>
                    </SimpleGrid>
                </Box>
                <Box mb={80}>
                    <Title order={2} mb={32} align="center">Keuntungan Menggunakan Inknara</Title>
                    <SimpleGrid
                        breakpoints={[
                            { minWidth: 'sm', cols: 1 },
                            { minWidth: 'md', cols: 2 },
                            { minWidth: 1200, cols: 3 },
                        ]}>
                        <StyledPaper shadow="sm" radius="md" p="md" py={40} withBorder display="flex">
                            <Title order={3}>FREE Trial</Title>
                        </StyledPaper>
                        <StyledPaper shadow="sm" radius="md" p="md" py={40} withBorder display="flex" justify="center" align="center" >
                            <Title order={3}>Use Now <Text display='block'>Pay Later</Text></Title>
                        </StyledPaper>
                        <StyledPaper shadow="sm" radius="md" p="md" py={40} withBorder display="flex" justify="center" align="center" >
                            <Title order={3}>Same Day SLA</Title>
                        </StyledPaper>
                    </SimpleGrid>
                </Box>
                <Box align="center">
                    <Button size='lg' variant="gradient" gradient={{ from: '#666684', to: '#000030', deg: 35 }}> Contact Now!</Button>
                </Box>
            </Container>
        </section>
    )
}

export default Section2