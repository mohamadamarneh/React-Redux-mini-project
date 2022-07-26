import React, { Fragment, useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../store/BookSlice';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import './book.css';


const Editcont = () => {
    const [selectedData, setSelectedData] = useState(null);
    const dispatch = useDispatch();

    const { loading, books, error } = useSelector((state) => state.books);
    const { loggedIn } = useSelector((state) => state.auth);


    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    const getBookHandler = useCallback((data) => {
        if (data) {
            setSelectedData(data);
        }
    }, []);



    return (
        <>
            <div className='col side-line'>
                <BookInfo data={selectedData} />
            </div>

        </>
    );
}

export default Editcont;