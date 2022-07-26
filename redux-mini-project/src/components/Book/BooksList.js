import React from 'react';
import { deleteBook } from '../../store/BookSlice';
import {Link} from 'react-router-dom';
const BooksList = ({ loading, books, dispatch, getBook, isloggedIn }) => {
  //delete handler
  const deleteBookHandler = (id) => {
    dispatch(deleteBook(id))
      .unwrap()
      .then((res) => {
        console.log(res);
      });
  };

  const productsList = books.map((book) =>
    <tr>
      <td scope="row">{book.id}</td>
      <td>{book.name}</td>
      <td><img src={book.imgpath}  style={{width:'50px'}} />    </td>
      <td>{book.price}</td>
      <td>
        <button
          type='button' className='btn btn-primary mr-1' onClick={() => getBook(book)}>
          Read
        </button>
        <button
          type='button' className='btn btn-danger' onClick={() => deleteBookHandler(book)} >
          Delete
        </button>
      </td>
    </tr>
  );



  return (
    <div>
      <h2>Products:</h2>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th> photo</th>
              <th> price</th>
              <th> show / delete</th>

            </tr>
          </thead>
          {loading ? 'loading...' : <tbody>{productsList}</tbody>}
        </table>

      </div>



    </div>
  );
};

export default BooksList;
