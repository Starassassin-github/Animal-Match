// import
import React, { useEffect, useContext, useState, useRef } from 'react';
import axios from 'axios';

// Component
import Hamburger from '../hamburger/hamburger';
import MenubarDesktop from './menubarDesktop';
import PageBody from './pageBody';

// Context
import AuthGlobal from '../../Context/store/AuthGlobal';

// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { showToast } from '../../utils/tools';

export default function Homepage() {

  const context = useContext(AuthGlobal)

  const effectRan = useRef(false);

  const [postId, setPostId] = useState('');

  const [images, setImages] = useState([]);

  const handleAddPost = async (response) => {

    let x = Math.floor((Math.random() * response.data.length))
    const element = response.data[x];
    return element
  }

  useEffect(() => {

    if (effectRan.current === false) {

      const url = `/api/v1/posts/main/${context.stateUser.user.userId}`;

      const fetchWorkStatus = async () => {
        try {
          const response = await axios.get(url);
          if (response.status === 200 || response.status === 201) {
            await handleAddPost(response).then((res) => {
               axios.get(`/api/v1/posts/${res}`).then((res)=>{
                setImages(res.data.images)
                setPostId(res.data._id)
               })
            })

          }

        } catch (error) {
          const msg = "Something Wrong! Pleases try again"
          showToast('ERROR', msg)
        }
      };

      fetchWorkStatus();

      return () => {
        setImages([])
        setPostId("")
        effectRan.current = true
      };
    }
  }, []);

  return (
    <div className='  w-screen relative  '>
      <div> <Hamburger /></div>
      <div>
      </div>
      <div><PageBody images={images} _id={postId} /></div>
      <div><MenubarDesktop /></div>
      <ToastContainer />
    </div>
  );
}