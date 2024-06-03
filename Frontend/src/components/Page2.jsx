import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Page2 = () => {
  const backgroundImageUrl = "https://cdn.pixabay.com/photo/2024/02/27/00/13/heliconia-8599119_1280.jpg";
  const title = "Nature";
  const content = "Page 2 content";

  return (
    <Box
      backgroundImage={`url(${backgroundImageUrl})`}
      backgroundSize="cover"
      backgroundPosition="center"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      padding="20px"
      color="white"
    >
      <Text as="h1" fontSize="6xl" fontWeight="bold" color="yellow.300" mb={8}>
        {title}
      </Text>
      <Box
        background="rgba(0, 0, 0, 0.5)"
        padding="20px"
        borderRadius="md"
      >
        <Text fontSize="xl" color="cyan.200">
          {content}
        </Text>
      </Box>
    </Box>
  );
};

export default Page2;
