
import { useDispatch, useSelector } from 'react-redux';
import { updateBook } from '../../store/BookSlice';
import React, { useRef ,Fragment,useState,useEffect } from 'react';
const PostInfo = ({ data }) => {



  const [name1,setName]=useState(null);
  const [price1,setPrice]=useState(null);
  const [desc1,setDesc]=useState(null);


  // console.log(data.name)


  
  //   useEffect(() => {
  //     setName(data.name);
  //     setPrice(data.price);
  //     setDesc(data.desc);
  // }, [data]);

const dispatch = useDispatch();

  const formSubmit = (e) => {
    e.preventDefault();
    // dispatch(
    //   updateBook({
    //     name: name1,
    //     price: price1,
    //     desc: desc1,
    //   })
    // );

  };

  return (
    <Fragment>
      <h2>Edit </h2>
      {data ? (
        <div>
          <form >
          <p className='fw-bold'>Title:</p>
          <input defaultValue={name1} className='form-control' name='name'/>
          <p className='fst-italic'>Price: </p>
          <input defaultValue={name1} className='form-control' name='price' />
          <p className='fw-light'>Description: </p>
          <textarea defaultValue={name1}  className='form-control' id='description'  rows='3' ></textarea>


          <button type='submit' className='btn btn-primary mt-2'> Submit </button>
          </form>
        </div>
      ) : (
        <div className='alert alert-secondary' role='alert'>
          There is no book selected yet. Please select!
        </div>
      )}
    </Fragment>
  );
};

export default React.memo(PostInfo);
