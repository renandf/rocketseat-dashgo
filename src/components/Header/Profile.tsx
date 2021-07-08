import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileDetails?: boolean;
}

export function Profile({ showProfileDetails = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileDetails && (
        <Box mr="4" textAlign="right">
          <Text>Diego Fernandes</Text>
          <Text color="gray.300" fontSize="small">
            diego.shell@email.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Diego Fernandes"
        src="https://github.com/diego3g.png"
      />

    </Flex>
  )
}