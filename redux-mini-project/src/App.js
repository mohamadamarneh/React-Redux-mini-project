import React, { Fragment } from 'react';

import '../src/style.css';
import Header from './components/Header';
import Container from './components/Container';
import AddForm from './components/AddForm';
import BookContainer from './components/Book/BookContainer';
import Admin from './admin';
import Home from './Home';
import Footer from './footer';
import Editcont from './components/Book/editcontainer';


import { BrowserRouter as Router, Routes, Route, Link ,NavLink } from 'react-router-dom';



const App = () => {
  return (
    

<Router>
<Header />


      <Routes>

      <Route path="/dash" element={<Admin />} />
      <Route path="/" element={<Home />} />
      <Route path="/edit" element={<Editcont />} />



      </Routes>
      <Footer />

      </Router>
    
  );
};

export default App;
