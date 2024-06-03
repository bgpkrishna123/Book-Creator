import React from 'react';
import { Flex, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" p="4" bg="teal" color="white">
      <Link to="/">
        <Button variant="ghost">Home</Button>
      </Link>
      <Flex>
        <Link to="/auth">
          <Button mr="2">Login</Button>
        </Link>
        <Link to="/auth">
          <Button colorScheme="whiteAlpha">Sign Up</Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
