import React, { Fragment, useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from './store/BookSlice';
import './style.css'



const Home = () => {
    const dispatch = useDispatch();
    const { loading, books, error } = useSelector((state) => state.books);

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    console.log(books)


    const list = books.map(a =>
        // <div class="card mb-3" style={{ maxWidth: '500px' }}>
        //     <div class="row g-0">
        //         <div class="col-md-4">
        //             <img src={a.imgpath} class="img-fluid rounded-start" alt="..." />
        //         </div>
        //         <div class="col-md-8">
        //             <div class="card-body">
        //                 <h5 class="card-title">{a.name}</h5>
        //                 <p class="card-text">{a.desc}</p>
        //                 <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        //                 <h5 class="card-title">$ {a.price}</h5>
        //             </div>
        //         </div>
        //     </div>
        // </div>


        // <div class="col-12 col-md-6 col-lg-4 mb-5">
        //   <div class="card" style={{width: '18rem' ,  height: '572px'}}>
        //     <img src={a.imgpath} class="card-img-top" width='100%'
        //       alt="..." />
        //     <div class="card-body">
        //       <h5 class="card-title">{a.name}</h5>
        //       {/* <p class="card-text"> {a.desc}</p> */}
        //       <a href="#" class="link-primary"> ${a.price}</a>
        //     </div>
        //   </div>
        // </div>

        <div className="card p-2 m-4" style={{width: '18rem'}}>
  <img src={a.imgpath} className="card-img-top" alt="..." />

  <div className="card-body">
  <h5 className="card-title">{a.name}</h5>
    <p className="card-text">{a.desc}</p>
  </div>
</div>
    );
    return (
        <React.Fragment>
            
            <div className='container mt-5 '>

                <div className='row '>
                    {list}

                </div>

            </div>

        </React.Fragment>
    );
}

export default Home;