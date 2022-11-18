import ImageTestPost from '../../images/ImageTestPost.jpg';
import LikePostButton from '../../images/LikePostButton.png';
import DislikeButton from '../../images/DislikeButton.png';
import { PostCard } from './postcard';



export default function PageBody() {

  return (
  
    <div>
    <div name = 'desktop'>
    <span className='hidden sm:block'>
    <div className='bg-[#000] h-screen  w-screen  relative '> 
    <div className="flex flex-nowrap  bg-[#eedcf1] sm:bg-[#fff] sm:h-[700px]">
        <div className='h-screen w-screen bg-[#c1d2fe]  flex  place-items-center  flex-col '>
        <div className='sm:mt-[100px] lg:mt-[50px]'>
        <PostCard/>
        
        </div></div>  
    </div></div></span>  </div>
    
    <div name = 'mobile'>
    <span className='block sm:hidden '>
    <div className='bg-[#000]  w-screen '> 
    <div className="flex w-screen bg-[#fff] h-[560px] sm:bg-[#fff]  place-items-center  flex-col">
        <div className=''>
        <PostCard/>
        </div>  
    </div></div></span>  </div>
    </div>
  );
}