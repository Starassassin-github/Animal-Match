import  Animal_MatchLogo from '../../images/Animal_MatchLogo.png';
import messageBotton from '../../images/messageBotton.png';
import CreatePostButton from '../../images/CreatePostButton.png';

export default function MenubarDesktop() {
  const createPostScreenButton = () => {console.log("go to create post screen")}
  const matchScreentbutton = () => {console.log("go to match screen")}
  const HomeScreenButton = () => {console.log("go to home screen")}
  return (
      <div className="text-center h-[100px] w-screen fixed bottom-0 bg-[#8F00FF60] sm:bg-[#8F00FF60] sm:h-[70px] sm:mt-[20px]">
    <div name='mobile'>
      <span className='block sm:hidden'>
        <ul className="flex justify-center  flex-row">
          <img src={Animal_MatchLogo} onClick={() => HomeScreenButton() }  alt="Animal_MatchLogo" className="w-[90px] h-[90px] text-center mt-[10px] mx-2  m" />
          <img src={messageBotton} onClick={() => matchScreentbutton() } alt="messageBotton" className="w-[75px] h-[75px] text-center  mt-[15px]  mx-2 " />
          <img src={CreatePostButton} onClick={() => createPostScreenButton() } alt="CreatePostButton" className="w-[75px] h-[75px] text-center  mt-[15px]  mx-2 " />
        </ul>
      </span>
    </div>

    <div name="Desktop">
      <span className='hidden sm:block'>
        <div className='flex  mr-[30px]'>
          <img src={CreatePostButton} onClick={() => createPostScreenButton() } alt="CreatePostButton" className="w-[55px] h-[55px] text-center  mt-[5px] ml-[50px]  " />
          <img src={messageBotton} onClick={() => matchScreentbutton() } alt="messageBotton" className="w-[55px] h-[55px] text-center  mt-[5px] ml-[50px]  " />
          <img src={Animal_MatchLogo} onClick={() => HomeScreenButton() }  alt="Animal_MatchLogo" className="w-[70px] h-[70px] text-center ml-[60px]  " />
        </div>
      </span>
    </div>
  </div>
    
  );
}
