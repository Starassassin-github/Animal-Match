
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import LikePostButton from '../../images/LikePostButton.png';
import DislikeButton from '../../images/DislikeButton.png';
import { useState } from "react";


export const PostCard = (props) => {

  // console.log(props.images);


  const [likePost, setLikePost] = useState(false)
  const [disLikePost, setDisLikePost] = useState(false)

  //   const handleOffer = async (id) => {

  //     let createContract = await axios.post(`${config.REACT_APP_API_URL}/contracts`, {
  //         apply_id: _id_user,
  //         image_apply: image,
  //         // offer id, name, image is for test
  //         offer_id: "6361511a20ee94c958f9ce27",
  //         apply_name: name,
  //         offer_name: "test for redux",
  //         image_offer: "someurl for need to fetch from redux",
  //         post: _id_post
  //     });
  //     let postOffer = await axios.put(`${config.REACT_APP_API_URL}/posts/offer/${_id_post}/${_id_user}?contract_id=${createContract.data._id}`)
  //     let workResolve = await axios.patch(`${config.REACT_APP_API_URL}/users/work_resolve/${_id_user}/${_id_post}?type_resolve=o`)

  //     let filterArrayUser =  arrayUserApplyData.filter((value, index)=> {
  //         if (value._id !== id) {
  //             return value
  //         }
  //     })

  //     let filterArrayOffer = arrayUserApplyData.filter((value, index) => {
  //         if (value._id == id) {
  //             return value
  //         }
  //     })

  //     setArrayUserApplyData(filterArrayUser);
  //     setArrayOfferData(arrayOfferData => [...arrayOfferData, { user_data: filterArrayOffer[0], contract_data: createContract.data }])
  // }

  const slideImages = []
  const imagesProps = props.images

  imagesProps.forEach((element, index) => {
    slideImages.push({ url: element, caption: `Slide ${index + 1}` })
  });

  console.log(slideImages);

  // const slideImages = [
  //     {
  //       url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKr5wT7rfkjkGvNeqgXjBmarC5ZNoZs-H2uMpML8O7Q4F9W-IlUQibBT6IPqyvX45NOgw&usqp=CAU',
  //       caption: 'Slide 1',

  //     },
  //     {
  //       url: 'https://res.cloudinary.com/jerrick/image/upload/v1668106965/636d4ad570b2ec001cba5201.jpg',
  //       caption: 'Slide 2',

  //     },
  //     {
  //       url: 'https://media.wired.com/photos/5cdefb92b86e041493d389df/2:1/w_1500,h_750,c_limit/Culture-Grumpy-Cat-487386121.jpg',
  //       caption: 'Slide 3',

  //     },
  //   ];
  console.log(slideImages);

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
                                <img onClick={() => setLikePost(true)} src={LikePostButton} alt="LikePostButton" className="w-[65px] h-[65px]   mt-[7px]   cursor-pointer" />
                              </div>

                              <div className='ml-[110px]'>
                                <img onClick={() => setDisLikePost(true)} src={DislikeButton} alt="DislikeButton" className="w-[65px] h-[65px]   mt-[7px]  cursor-pointer" />
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
                                      <img src={LikePostButton} onClick={() => setLikePost(true)} alt="LikePostButton" className="w-[65px] h-[65px] text-center  mt-[5px]   cursor-pointer" />
                                    </div>


                                    <div className='ml-[96px]'>
                                      <img src={DislikeButton} onClick={() => setDisLikePost(true)} alt="DislikeButton" className="w-[65px] h-[65px] text-center  mt-[5px]  cursor-pointer" />
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
