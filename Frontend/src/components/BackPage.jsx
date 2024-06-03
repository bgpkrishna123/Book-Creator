import { Box, VStack, Image, Text, HStack, Divider } from '@chakra-ui/react';
import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

const BackPage = () => {
  const book = {
    title: "Nature",
    author: "Krishna",
    coverImages: [
      { url: "https://cdn.pixabay.com/photo/2024/02/27/00/13/heliconia-8599119_1280.jpg", description: "Cover Image 1" },
    ],
    user: "User123",
    createdAt: new Date().toLocaleDateString()
  };

  return (
    <Box
      backgroundImage={`url(${book.coverImages[0].url})`}
      backgroundSize="cover"
      backgroundPosition="center"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      textAlign="center"
      padding="20px"
      color="white"
    >
      <Text as="h1" fontSize="6xl" fontWeight="bold"  color="yellow.300">
        {book.title}
      </Text>
      <Divider borderColor="black" borderWidth="2px" width="80%" />

      <Box mt={10}>
        <Text fontSize="lg" color="cyan.200">Created by: {book.user}</Text>
        <Text fontSize="lg" color="cyan.200">Created at: {book.createdAt}</Text>
        <HStack spacing={4} mt={2}>
          <FaFacebook size="24px" color="blue.500" />
          <Text fontSize="lg" color="blue.300">www.facebook.{book.title}.com</Text>
        </HStack>
        <HStack spacing={4} mt={2}>
          <FaTwitter size="24px" color="blue.400" />
          <Text fontSize="lg" color="blue.300">www.twitter.{book.title}.com</Text>
        </HStack>
      </Box>
    </Box>
  );
};

export default BackPage;
