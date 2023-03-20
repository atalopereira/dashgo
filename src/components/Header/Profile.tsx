import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="center">
        <Text>Átalo Pereira</Text>
        <Text color="gray.300" fontSize="small">
          atalopereira01@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Átalo Pereira" src="https://github.com/atalopereira.png" />
    </Flex>
  )
}