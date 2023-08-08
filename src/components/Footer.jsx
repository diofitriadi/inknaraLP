import { Box, Flex, Text } from '@mantine/core'
import React from 'react'

export default function Footer() {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: "#f5f5f5",
        padding: "20px"
      })}
    >
      <Flex
        justify={'center'}
        align={'center'}
        direction={'column'}
      >
        <Text fw={700} fz="sm" ta={'center'}>@2023 Lorem ipsum dolor sit amet consectetur adipisicing elit</Text>
        <Text fz="sm" fw={500} ta={'center'}>lorem ipsum dolor</Text>
        <Text fz="xs" ta={'center'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio repellat ratione </Text>
        <Text fz="sm" fw={500} ta={'center'}>lorem ipsum</Text>
        <Text fz="xs" ta={'center'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio</Text>
        <Text fz="sm" fw={500} ta={'center'}>lorem</Text>
        <Text fz="xs" ta={'center'}>lorem@gmail.com | 08214724736</Text>
      </Flex>
    </Box>
  )
}
