// import
import React, { useContext } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';


// components

import ReadPost from "./components/Post/Read/ReadPost";
import 'react-toastify/dist/ReactToastify.css';
import Temp from "./components/temp/tempapp";
import Create from "./components/Post/Create/Create";
import LoginComponent from "./components/auth/LoginComponent";
import RegisterComponent from "./components/auth/RegisterComponent";

import PrivateRoutes from "./hoc/PrivateRoutes";


function MyRoute() {

 

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route path='/' element={<Temp/>}/>
          <Route path='create' element={<Create/>}/>
        </Route>
        <Route path='/login' element={<LoginComponent/>} />
        <Route path='/register' element={<RegisterComponent/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoute;
