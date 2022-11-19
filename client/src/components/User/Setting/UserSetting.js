import React, { useState, useRef, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Context
import AuthGlobal from "../../../Context/store/AuthGlobal";


// helper
import {  showToast } from "../../../utils/tools";


import BodyUserSetting from './BodyUserSetting';
import MenubarDesktop from "../../Home/menubarDesktop";
import Hamburger from "../../hamburger/hamburger";


export default function UserSetting() {
  
    return (
      <div  className='flex flex-col h-full w-full relative min-h-full\  text-center bg-[#EFE3C0]' >
          
          <Hamburger />
          
          
          <div ><BodyUserSetting /></div>
          <div className="mt-[40px]"><MenubarDesktop /></div>
          <ToastContainer />
      </div>
    );
  }
