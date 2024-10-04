import React from 'react';
import { 
  Box, 
  Flex, 
  HStack, 
  Link, 
  IconButton, 
  useDisclosure, 
  Stack, 
  Button, 
  useColorMode, 
  useColorModeValue 
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode(); // Theme toggle hook

  const bgColor = useColorModeValue('#800020', '#FFD700'); // Background color based on theme
  const linkColor = useColorModeValue('white', '#800020');  // Link color based on theme

  return (
    <Box bg={bgColor} px={4} >
        <Box  w="90%" margin="auto"  >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Left Section of Navbar */}
        <HStack spacing={8} alignItems="center">
          <Box color={linkColor} fontWeight="bold" fontSize="xl">StoryBloom</Box>
          <HStack
            as="nav"
            spacing={4}
            display={{ base: 'none', md: 'flex' }} // Hidden on mobile, shown on larger screens
          >
            <Link px={2} py={1} rounded={'md'} color={linkColor} _hover={{ bg: 'blue.700' }} href="#">
              Home
            </Link>
            <Link px={2} py={1} rounded={'md'} color={linkColor} _hover={{ bg: 'blue.700' }} href="#">
              Course
            </Link>
            <Link px={2} py={1} rounded={'md'} color={linkColor} _hover={{ bg: 'blue.700' }} href="#">
              About
            </Link>
            <Link px={2} py={1} rounded={'md'} color={linkColor} _hover={{ bg: 'blue.700' }} href="#">
              Contact
            </Link>
          </HStack>
        </HStack>

        {/* Right Section with Theme Toggle Button */}
        <HStack spacing={4}>
          {/* Theme Toggle Button */}
          <IconButton
            size="md"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            aria-label="Toggle Theme"
            onClick={toggleColorMode}
            colorScheme="yellow"
          />

          {/* Mobile Menu Toggle Button */}
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Toggle Menu'}
            display={{ md: 'none' }} // Visible only on mobile
            onClick={isOpen ? onClose : onOpen}
            color={linkColor}
          />
            <Button  variant='solid' colorScheme='pink'>Login</Button>
        </HStack>
      </Flex>

      {/* Mobile Menu */}
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <Link px={2} py={1} rounded={'md'} color={linkColor} _hover={{ bg: 'blue.700' }} href="#">
              Home
            </Link>
            <Link px={2} py={1} rounded={'md'} color={linkColor} _hover={{ bg: 'blue.700' }} href="#">
             Course
            </Link>
            <Link px={2} py={1} rounded={'md'} color={linkColor} _hover={{ bg: 'blue.700' }} href="#">
              About
            </Link>
            <Link px={2} py={1} rounded={'md'} color={linkColor} _hover={{ bg: 'blue.700' }} href="#">
              Contact
            </Link>
          </Stack>
        </Box>
      ) : null}
      </Box>
    </Box>
  );
};

export default Navbar;
