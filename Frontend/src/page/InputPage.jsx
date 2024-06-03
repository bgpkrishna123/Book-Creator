import React, { useState } from 'react';
import { Button, Container, Flex, FormControl, FormLabel, Input, Spacer, Textarea } from '@chakra-ui/react';
import axios from 'axios';
import Book from '../components/Book';

const InputPage = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [coverImageUrl, setCoverImageUrl] = useState('');
    const [coverImageTitle, setCoverImageTitle] = useState('');
    const [coverImageAuthor, setCoverImageAuthor] = useState('');
    const [pageBackgroundImage, setPageBackgroundImage] = useState('');
    const [pageText, setPageText] = useState('');
    const [books, setBooks] = useState(false);

    const url = 'https://book-creator-one.vercel.app/';

    const handleSave = async () => {
        try {
            const data = {
                title,
                author,
                coverImages: [{
                    imageUrl: coverImageUrl,
                    title: coverImageTitle,
                    author: coverImageAuthor
                }],
                pages: [{
                    backgroundImage: pageBackgroundImage,
                    text: pageText
                }]
            };

            const token = localStorage.getItem('token');
            const response = await axios.post(`${url}/books`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });
            setBooks(true);
            localStorage.setItem('data', JSON.stringify(response.data));
            console.log('PDF generated:', response.data);
        } catch (error) {
            console.error('Error generating PDF:', error.message);
        }
    };

    return (
        <Flex justify="center" ml={30}mr={1000}>
            <Container maxW="lg">
                <FormControl mb="4">
                    <FormLabel>Title</FormLabel>
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                </FormControl>
                <FormControl mb="4">
                    <FormLabel>Author</FormLabel>
                    <Input value={author} onChange={(e) => setAuthor(e.target.value)} />
                </FormControl>
                <FormControl mb="4">
                    <FormLabel>Cover Image URL</FormLabel>
                    <Input value={coverImageUrl} onChange={(e) => setCoverImageUrl(e.target.value)} />
                </FormControl>
                <FormControl mb="4">
                    <FormLabel>Cover Image Title</FormLabel>
                    <Input value={coverImageTitle} onChange={(e) => setCoverImageTitle(e.target.value)} />
                </FormControl>
                <FormControl mb="4">
                    <FormLabel>Cover Image Author</FormLabel>
                    <Input value={coverImageAuthor} onChange={(e) => setCoverImageAuthor(e.target.value)} />
                </FormControl>
                <FormControl mb="4">
                    <FormLabel>Page Background Image</FormLabel>
                    <Input value={pageBackgroundImage} onChange={(e) => setPageBackgroundImage(e.target.value)} />
                </FormControl>
                <FormControl mb="4">
                    <FormLabel>Page Text</FormLabel>
                    <Textarea value={pageText} onChange={(e) => setPageText(e.target.value)} />
                </FormControl>
                <Button colorScheme="teal" onClick={handleSave}>Save</Button>
            </Container>
            <Spacer/>
            {books && <Book />}
        </Flex>
    );
}

export default InputPage;
