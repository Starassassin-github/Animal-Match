import React, { useEffect, useContext, useState, useRef } from 'react';
import axios from 'axios';

import Hamburger from '../hamburger/hamburger';
import MenubarDesktop from './menubarDesktop';
import PageBody from './pageBody';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Homepage() {

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

      const url = `/api/v1/posts/main/63720b7c2a5cd2b1347d16e9`;

      const fetchWorkStatus = async () => {
        try {
          const response = await axios.get(url);
          if (response.status === 200) {
            await handleAddPost(response).then((res) => {
               axios.get(`/api/v1/posts/${res}`).then((res)=>{
                setImages(res.data.images)
                setPostId(res.data._id)
               })
            })

          }

        } catch (error) {
          console.log(error);
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