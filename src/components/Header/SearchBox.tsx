// import { useState, useRef } from "react";
import { Flex, Input, Icon } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  // Controlled component implementation example
  // If searching while typing, research the concept of "debounce"
  // const [ search, setSearch ] = useState('')

  // Uncontrolled component implementation example
  // const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxW={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        mr="4"
        placeholder="Search..."
        _placeholder={{ color: 'gray.400' }}

      // Uncontrolled component implementation example
      // ref={searchInputRef}

      // Controlled component implementation example
      // value={search}
      // onChange={e => setSearch(e.target.value)}
      />

      <Icon as={RiSearchLine} fontSize="20" />

    </Flex>
  )
}