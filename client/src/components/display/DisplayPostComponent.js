// import
import React from "react";

// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Component
import Hamburger from "../hamburger/hamburger";
import MenubarDesktop from "../Home/menubarDesktop";
import DisplayPost from "./displayPost";




function DisplayPostComponent() {
  return (
    <div className='flex flex-col  w-sreen h-screen relative'>
      <div> <Hamburger /></div>
      <div>
      </div>
      <div>
        <DisplayPost />
      </div>
      <div><MenubarDesktop /></div>
      <ToastContainer />
    </div>


  );
}

export default DisplayPostComponent;
