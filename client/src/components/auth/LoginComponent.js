// import
import React from "react";

import Login from "./login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function LoginComponent() {
  return (
    <div className='flex flex-col  w-sreen h-screen relative'>
        <div>
            <Login />
        </div>
        <ToastContainer />
    </div>
  );
}

export default LoginComponent;
