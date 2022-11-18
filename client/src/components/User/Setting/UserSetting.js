import HeadUserSetting from './HeadUserSetting';
import profileUserTest from '../../../images/profileUserTest.jpg';
import BodyUserSetting from './BodyUserSetting';
export default function UserSetting() {
  
    return (
      <div  className='flex flex-col h-full w-full relative min-h-full\  text-center bg-[#EFE3C0]' >
          
          <div> <HeadUserSetting /></div>
          
          <div className="bg-[#FEE39F] h-[120px] sm:h-[70px] sm:bg-gradient-to-r from-[#D3B3E4] to-[#E4B3E2] flex">
              <img src={profileUserTest} alt="profileUserTest" className="w-[230px] h-[230px] sm:border-[#C999C7] border-solid border-8 border-[#ffffff] rounded-full ml-[40px] sm:h-[300px] sm:w-[300px]" />
          </div>
          <div className="mt-[110px] bg-[#EFE3C0] sm:mt-[230px]"><BodyUserSetting/></div>
      </div>
    );
  }
