// import
import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// components
// import Hamburger from './components/hamburger/hamburger';
// import CreatePost from './components/Post/Create/CreatePost';
// import ReadPost from "./components/Post/Read/ReadPost";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Hamburger from "../hamburger/hamburger";
import CreatePost from "../Post/Create/CreatePost";



function Temp() {
  return (
    <div className='flex flex-col  w-sreen h-screen relative'>
      <div>
        <Hamburger />
        <div className="flex text-center h-[10px] bg-[#EBC8F1] sm:bg-gradient-to-r from-[#EF2DFF] to-[#000000] ">
          <h1 >&nbsp;</h1>
        </div>
        <div className="flex text-center h-[5] bg-[#EBC8F1] sm:bg-gradient-to-r from-[#EF2DFF] to-[#FFFFFF] ">
          <h1 >&nbsp;</h1>
        </div>
      </div>
      <div>
        <CreatePost />
        {/* <ReadPost /> */}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Temp;
