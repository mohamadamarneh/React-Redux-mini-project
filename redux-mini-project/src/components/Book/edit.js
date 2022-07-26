
import React, { useState,useEffect } from 'react';
import axios from 'axios';


const Edit = () => {


    const [selectedData, setSelectedData] = useState(null);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchBooks());
      }, [dispatch]);
    
      const getBookHandler = useCallback((data) => {
        if (data) {
          setSelectedData(data);
        }
      }, []);


    const [Persons, setapi] = useState([]);




    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/products/${data.id}`)
            .then(x => x.json())
            .then(y => setapi(y));
    }
        , [])


        const [name, setName] = useState(Persons.name);
        const [price, setEmail] = useState(Persons.price);
        const [desc, setPass] = useState(Persons.desc);

        useEffect(() => {
            setName(Persons.name)
            setEmail(Persons.email);
            setPass(Persons.password);
        }, []);


        const updateAPIData = (e) => {
            e.preventDefault();
            
            axios.put(`http://127.0.0.1:8000/api/products/${data.id}`, {
                name:name ,
                price:price ,
                desc:desc
    
            })
            history.replace('/dash')

        }




    return ( 
        <>
        <div>
          <form >
          <p className='fw-bold'>Title:</p>
          <input onChange={e => setName(e.target.value) } defaultValue={name} className='form-control' name='name'/>
          <p className='fst-italic'>Price: </p>
          <input onChange={e => setEmail(e.target.value)} defaultValue={price} className='form-control' name='price' />
          <p className='fw-light'>Description: </p>
          <textarea onChange={e => setPass(e.target.value)} defaultValue={desc}  className='form-control' id='description'  rows='3' ></textarea>


          <button onClick={updateAPIData} type='submit' className='btn btn-primary mt-2'> Submit </button>
          </form>
        </div>

        </>
     );
}
 
export default Edit;