import React, { useState } from 'react';
import axios from 'axios';
import { Grid, GridItem, Button, Input, Text } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; 

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const url = 'http://localhost:8080';
  const toast = useToast();
  const navigate = useNavigate(); 

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleNameChange = (e) => setUsername(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      try {
        const response = await axios.post(`${url}/users/login`, {
          email,
          password,
        });
        if (response.data && response.data.token) {
          localStorage.setItem('token', response.data.token);
          toast({
            title: 'Login Successful',
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: 'top',
          });
          localStorage.setItem('userDetails', JSON.stringify(response.data));
          navigate('/input-page'); 
        } else {
          throw new Error('Invalid response data');
        }
      } catch (error) {
        setError(error.response?.data?.message);
      }
    } else {
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      try {
        const response = await axios.post(`${url}/users/register`, {
          username,
          email,
          password,
        });
        console.log('Signup success:', response.data);
        toast({
          title: 'Sign up successful! You can now log in.',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top',
        });

        const loginResponse = await axios.post(`${url}/users/login`, {
          email,
          password,
        });
        localStorage.setItem('userDetails', JSON.stringify(loginResponse.data));
        navigate('/input-page'); 
      } catch (error) {
        setError(error.response?.data?.message);
      }
    }
  };

  const togglePage = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  return (
    <Grid placeItems="center" h="100vh">
      <GridItem maxW="lg" borderWidth="1px" borderRadius="lg" boxShadow="lg" p={8}>
        <form onSubmit={handleSubmit}>
          <Grid templateColumns="1fr" gap={4}>
            <h1 style={{ fontSize: '2rem', color: 'teal', fontWeight: 'bold', marginBottom: '10px', textAlign: 'center' }}>
              {isLogin ? 'Log In' : 'Sign Up'}
            </h1>

            {!isLogin && (
              <Input type="text" placeholder="Your Name" value={username} onChange={handleNameChange} required />
            )}

            <Input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
            <Input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />

            {!isLogin && (
              <Input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
            )}

            {error && <Text color="red.500">{error}</Text>}
            <Button type="submit" colorScheme="teal">
              {isLogin ? 'Log In' : 'Sign Up'}
            </Button>

            <Text color="gray.500" mt={2} textAlign="center" onClick={togglePage} cursor="pointer">
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <Text as="span" color="teal">
                {isLogin ? 'Sign Up' : 'Log In'}
              </Text>
            </Text>
          </Grid>
        </form>
      </GridItem>
    </Grid>
  );
};

export default Auth;
