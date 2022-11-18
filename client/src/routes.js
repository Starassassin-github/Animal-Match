// import
import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// components


import ReadPost from "./components/Post/Read/ReadPost";
import 'react-toastify/dist/ReactToastify.css';
import Temp from "./components/temp/tempapp";
import Create from "./components/Post/Create/Create";
import LoginComponent from "./components/auth/LoginComponent";
import RegisterComponent from "./components/auth/RegisterComponent";


function MyRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Temp/>} />
        <Route path='/login' element={<LoginComponent/>} />
        <Route path='/create' element={<Create/>}/>
        <Route path='/register' element={<RegisterComponent/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoute;
