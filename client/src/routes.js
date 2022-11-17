// import
import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// components
import Hamburger from './components/hamburger/hamburger';
import CreatePost from './components/Post/Create/CreatePost';
import ReadPost from "./components/Post/Read/ReadPost";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Temp from "./components/temp/tempapp";
import Create from "./components/Post/Create/Create";


function MyRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Temp/>} />
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoute;
