// import
import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// Toast
import 'react-toastify/dist/ReactToastify.css';

// components
import Create from "./components/Post/Create/Create";
import LoginComponent from "./components/auth/LoginComponent";
import RegisterComponent from "./components/auth/RegisterComponent";
import PrivateRoutes from "./hoc/PrivateRoutes";
import Homepage from "./components/Home/Homepage";
import UserAccount from "./components/User/Account/UserAccount";
import UserSetting from "./components/User/Setting/UserSetting";
import DisplayPostComponent from "./components/display/DisplayPostComponent";
import FavoritePostComponent from "./components/Post/Read/FavoritePostComponet";
import { Loader } from "./utils/tools";


function MyRoute() {

 

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route path='/' element={<Homepage/>}/>
          <Route path='create' element={<Create/>}/>
          <Route path='posts/:id' element={<DisplayPostComponent/>}/>
          <Route path='users/favorites/:id' element={<FavoritePostComponent/>}/>
          <Route path='users/profile/:id' element={<UserAccount/>}/>
          <Route path='users/profile/setting/:id' element={<UserSetting/>}/>
        </Route>
        <Route path='/login' element={<LoginComponent/>} />
        <Route path='/register' element={<RegisterComponent/>} />
        <Route 
          path="*"
          element={
            <Loader />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoute;
