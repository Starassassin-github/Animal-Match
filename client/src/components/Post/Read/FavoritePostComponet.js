// import
import React from "react";

// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Component
import Hamburger from "../../hamburger/hamburger";
import MenubarDesktop from "../../Home/menubarDesktop";
import ReadPost from "./ReadPost";




function FavoritePostComponent() {
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
        <ReadPost />
      </div>
      <div><MenubarDesktop /></div>
      <ToastContainer />
    </div>
  );
}

export default FavoritePostComponent;
