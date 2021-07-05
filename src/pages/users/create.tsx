import { Box, Flex, Heading, VStack, HStack, Divider, SimpleGrid, Button } from "@chakra-ui/react";

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function UserCreate() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius="md" bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">Add new user</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" gap="8" w="100%">
              <Input name="name" label="Full name" />
              <Input name="email" type="email" label="email" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" gap="8" w="100%">
              <Input name="password" type="password" label="Password" />
              <Input name="password_confirmation" type="password" label="Repeat password" />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha">Cancel</Button>
              <Button colorScheme="pink">Save</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}