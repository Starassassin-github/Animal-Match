import React, { useEffect, useContext, useState, useRef } from 'react';
import axios from 'axios';

import Hamburger from '../hamburger/hamburger';
import MenubarDesktop from './menubarDesktop';
import PageBody from './pageBody';

// Context
import AuthGlobal from '../../Context/store/AuthGlobal';


export default function Homepage() {

  const effectRan = useRef(false);

  const context = useContext(AuthGlobal)

  const [postInMain, setPostInMain] = useState([]);

  const [postId, setPostId] = useState('');


  const [postData, setPostsData] = useState();

  const [title, setTitle] = useState("");
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
                setTitle(res.data.title)
                setImages(res.data.images)
               })
            })

          }

        } catch (error) {
          console.log(error);
        }
      };

      fetchWorkStatus();

      return () => {
        setPostsData()
        setPostInMain([]);
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
      <div><PageBody images={images} /></div>
      <div><MenubarDesktop /></div>
    </div>
  );
}