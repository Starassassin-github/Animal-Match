import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// helper
import {  showToast } from "../../../utils/tools";



import profileUserTest from '../../../images/profileUserTest.jpg';
import BodyUserAccount from "./BodyUserAccount";
import MenubarDesktop from "../../Home/menubarDesktop";
import Hamburger from "../../hamburger/hamburger";



export default function UserAccount() {

  let params = useParams();

  const effectRan = useRef(false);

  const [profileUser, setProfileUser] = useState("");
  const [itemData, setItemData] = useState({});

  useEffect(() => {

    if (effectRan.current === false) {

      const url = `${process.env.REACT_APP_URL}/api/v1/users/${params.id}`;

      const fetchPost = async () => {
        try {
          const response = await axios.get(url);
          if (response.status === 200 || response.status === 201) {
            setProfileUser(response.data.image)
            setItemData(response.data)
          }

        } catch (error) {
          const msg = "Something Wrong! Pleases try again"
          showToast('ERROR', msg)
        }
      };

      fetchPost();

      return () => {

        effectRan.current = true
      };
    }
  }, []);

  return (
    <div className='flex flex-col h-full w-full relative min-h-full\  text-center'>

      <Hamburger />

      <div className="bg-[#EBC8F1] h-[120px] sm:h-[70px] sm:bg-gradient-to-r from-[#98C3FF] to-[#ffffff] flex">
        {
          (profileUser === "") || (profileUser === undefined) ?
            <img src={profileUserTest} alt="profileUserTest" className="w-[230px] h-[230px] sm:border-[#98C3FF] border-solid border-8 border-[#ffffff] rounded-full ml-[90px] sm:h-[300px] sm:w-[300px]" />
            :
            <img src={profileUser} alt="profileUserTest" className="w-[230px] h-[230px] sm:border-[#98C3FF] border-solid border-8 border-[#ffffff] rounded-full ml-[90px] sm:h-[300px] sm:w-[300px]" />
        }
      </div>
      <div className="mt-[110px]"><BodyUserAccount item={itemData} /></div>
      <div className="mt-[40px]"><MenubarDesktop /></div>
      <ToastContainer />
    </div>
  );
}

