// import
import React from "react";


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Register from "./register";



function RegisterComponent() {
  return (
    <div className='flex flex-col  w-sreen h-screen relative'>
        <div>
            <Register/>
        </div>
        <ToastContainer />
    </div>
  );
}

export default RegisterComponent;
