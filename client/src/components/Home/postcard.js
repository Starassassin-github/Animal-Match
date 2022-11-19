// import
import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Toast
import { showToast } from "../../utils/tools";

// Component
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import LikePostButton from '../../images/LikePostButton.png';
import DislikeButton from '../../images/DislikeButton.png';

// Context
import AuthGlobal from '../../Context/store/AuthGlobal';

export const PostCard = (props) => {

  const context = useContext(AuthGlobal)

  let navigate = useNavigate()


  const handleOffer = async () => {

    let favoritePost = await axios.patch(`${process.env.REACT_APP_URL}/api/v1/users/favorites/${context.stateUser.user.userId}/${props._id}`)
      .then((res) => {
        if (res.status == 200 || res.status == 201) {
          const msg = "Liked"
          showToast('SUCCESS', msg)
          setTimeout(() => {
              window.location.reload();
          }, 2000)
        }
      })
      .catch((error) => {
        const msg = "Something Wrong!"
        showToast('ERROR', msg)
      })

  }

  const handleReject = async () => {

    let discardedPost = await axios.patch(`${process.env.REACT_APP_URL}/api/v1/users/discardeds/${context.stateUser.user.userId}/${props._id}`)
      .then((res) => {
        if (res.status == 200 || res.status == 201) {
          const msg = "No another one"
          showToast('SUCCESS', msg)
          setTimeout(() => {
              window.location.reload();
          }, 2000)
        }
      })
      .catch((error) => {
        const msg = "Something Wrong!"
        showToast('ERROR', msg)
      })

  }

  const slideImages = []
  const imagesProps = props.images

  imagesProps.forEach((element, index) => {
    slideImages.push({ url: element, caption: `Slide ${index + 1}` })
  });

  const Slideshow = () => {
    return (
      <div className='sm:bg-gradient-to-b from-[#FFD7FA] to-[#D7EFFF] sm:w-[630px] place-items-center flex flex-col '>
        <div className="slide-container bg-[#eedcf1] w-[390px] h-[430px] sm:w-[550px] sm:h-[580px] lg:w-[490px] lg:h-[520px] rounded-r-2xl rounded-l-2xl border-8 border-[#F8FFAF]">
          {
            slideImages.length > 0 ?
              <Slide className=" ">
                {slideImages.map((slideImage, index) => (
                  <div className="each-slide" key={index}>
                    <div>
                      <img src={slideImage.url} alt="" className="w-[390px] h-[420px]  sm:w-[550px] sm:h-[560px] lg:w-[490px] lg:h-[500px] rounded-r-2xl rounded-l-2xl " />

                      <div name='mobile'>
                        <span className='block sm:hidden'>
                          <div className=' pb-[30px] mt-[20px]'>
                            <div className='flex  bg-[#ffbaff] rounded-full '>
                              <div className='ml-[90px] '>
                                <img onClick={() => handleOffer()} src={LikePostButton} alt="LikePostButton" className="w-[65px] h-[65px]   mt-[7px]   cursor-pointer" />
                              </div>

                              <div className='ml-[110px]'>
                                <img onClick={() => handleReject()} src={DislikeButton} alt="DislikeButton" className="w-[65px] h-[65px]   mt-[7px]  cursor-pointer" />
                              </div>
                            </div></div></span>
                      </div>

                      <div name="DesktopShow">
                        <span className='hidden sm:block'>
                          <div className='bg-[#c1d2fe]'>
                            <div className="ml-[60px] lg:ml-[20px] mt-[15px] rounded-lg border-solid border-2 border-[#970BD4] w-[420px] bg-[#dbf1f0]  ">

                              <div name='Desktop'>
                                <span className='hidden sm:block'>
                                  <div className='flex  h-[90px]'>
                                    <div className='ml-[98px] '>
                                      <img src={LikePostButton} onClick={() => handleOffer()} alt="LikePostButton" className="w-[65px] h-[65px] text-center  mt-[5px]   cursor-pointer" />
                                    </div>


                                    <div className='ml-[96px]'>
                                      <img src={DislikeButton} onClick={() => handleReject()} alt="DislikeButton" className="w-[65px] h-[65px] text-center  mt-[5px]  cursor-pointer" />
                                    </div>
                                  </div></span>
                              </div>
                            </div></div></span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slide>
              : null
          }
        </div></div>
    )
  }

  return (
    Slideshow()

  );
}
