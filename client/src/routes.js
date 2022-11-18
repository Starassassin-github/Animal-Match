// import
import React, { useContext } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';


// components

import ReadPost from "./components/Post/Read/ReadPost";
import 'react-toastify/dist/ReactToastify.css';
import Create from "./components/Post/Create/Create";
import LoginComponent from "./components/auth/LoginComponent";
import RegisterComponent from "./components/auth/RegisterComponent";
import PrivateRoutes from "./hoc/PrivateRoutes";
import Homepage from "./components/Home/Homepage";
import DisplayPost from "./components/display/displayPost";
import UserAccount from "./components/User/Account/UserAccount";
import UserSetting from "./components/User/Setting/UserSetting";


function MyRoute() {

 

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route path='/' element={<Homepage/>}/>
          <Route path='create' element={<Create/>}/>
          <Route path='posts/:id' element={<DisplayPost/>}/>
          <Route path='users/favorites/:id' element={<DisplayPost/>}/>
          <Route path='users/profile/:id' element={<UserAccount/>}/>
          <Route path='users/profile/setting/:id' element={<UserSetting/>}/>
        </Route>
        <Route path='/login' element={<LoginComponent/>} />
        <Route path='/register' element={<RegisterComponent/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoute;
