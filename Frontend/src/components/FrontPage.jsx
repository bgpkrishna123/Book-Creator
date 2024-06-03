import { Text, Box } from '@chakra-ui/react';
import React from 'react';

const FrontPage = () => {
  
  const title = "Nature";
  const author = "Krishna";
  const coverImageUrl = "https://cdn.pixabay.com/photo/2024/02/27/00/13/heliconia-8599119_1280.jpg";

  return (
    <Box
      backgroundImage={`url(${coverImageUrl})`}
      backgroundSize="cover"
      backgroundPosition="center"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      textAlign="center"
      padding="20px"
    >
      <Text as="h3"  fontSize="3xl" fontWeight="bold" color="white" mt="80px">
        A Novel by {author}
      </Text>
      <Text as="h1" fontSize="6xl" fontWeight="bold" color="white" mb={50}>
        {title}
      </Text>
    </Box>
  );
};

export default FrontPage;
