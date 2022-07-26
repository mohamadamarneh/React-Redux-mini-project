import React from 'react';
import Container from './components/Container';
import AddForm from './components/AddForm';
import BookContainer from './components/Book/BookContainer';

const Admin = () => {
    return (
        <>
            <Container>
                < AddForm />
                <BookContainer />
            </Container></>
    );
}

export default Admin;