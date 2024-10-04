import { Box, Text, Stack, Link, HStack } from '@chakra-ui/react';

const Footer = () => {
  return (
   <Box w="100%" bg="gray.800" color="gray.200"  marginTop="40px" marginBottom="10px" >
     <Box w="87%" margin="auto" >
    <Box bg="gray.800" color="gray.200" py={6} px={8}>
      <Stack direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
        {/* Logo or Name */}
        <Text fontSize="lg" fontWeight="bold">
        StoryBloom
        </Text>

        {/* Links */}
        <HStack spacing={8}>
          <Link href="/about" _hover={{ textDecoration: 'underline' }}>About Us</Link>
          <Link href="/contact" _hover={{ textDecoration: 'underline' }}>Contact</Link>
          <Link href="/privacy" _hover={{ textDecoration: 'underline' }}>Privacy Policy</Link>
        </HStack>

        {/* Copyright */}
        <Text fontSize="sm">
          © {new Date().getFullYear()} MyBookStore. All rights reserved.
        </Text>
      </Stack>
    </Box>
    </Box>
   </Box>
  );
};

export default Footer;
