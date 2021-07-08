import { Flex, useBreakpointValue } from '@chakra-ui/react';

import { Logo } from './Logo';
import { SearchBox } from './SearchBox';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';

export function Header() {
  const isLargeScreen = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />

      {isLargeScreen && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileDetails={isLargeScreen} />
      </Flex>
    </Flex>
  )
}