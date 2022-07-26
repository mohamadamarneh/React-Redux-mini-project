import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authHandler } from '../store/authSlice';
// import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Button ,Navbar ,Brand,Link,Nav,Container} from 'react-bootstrap';


const Header = () => {
  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.books);
  const { loggedIn } = useSelector((state) => state.auth);

  return (
    <Fragment>
      {error && (
        <div className='alert alert-danger mb-0' role='alert'>
          {error}
        </div>
      )}

      {/* <nav className='navbar navbar-dark bg-dark text-white'>
        <span className='navbar-brand mb-0 h1'>PRAND</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item ">
            <NavLink to='/' >home</NavLink>

            </li>
            <li className="nav-item ">
            <NavLink to='/dash'>dashboard</NavLink>

            </li>
          </ul>
          
          
        </div>


        <button
          className='btn btn-outline-primary'
          type='submit'
          onClick={() => dispatch(authHandler())}
        >
          {loggedIn ? 'Log Out' : 'Log In'}
        </button>
      </nav> */}


<Navbar bg="dark" variant="dark">
        <div className='d-flex'>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/dash">Dashboard</Nav.Link>

          </Nav>
        </div>
      </Navbar>



    </Fragment>
  );
};

export default Header;
