import HeadUserAccount from "./HeadUserAcount";
import profileUserTest from '../../../images/profileUserTest.jpg';
import BodyUserAccount from "./BodyUserAccount";
import MenubarDesktop from "../../menubarDesktop";



export default function UserAccount() {
  
  return (
    <div  className='flex flex-col h-full w-full relative min-h-full\  text-center'>
        
        <div> <HeadUserAccount /></div>
        
        <div className="bg-[#EBC8F1] h-[120px] sm:h-[70px] sm:bg-gradient-to-r from-[#98C3FF] to-[#ffffff] flex">
            <img src={profileUserTest} alt="profileUserTest" className="w-[230px] h-[230px] sm:border-[#98C3FF] border-solid border-8 border-[#ffffff] rounded-full ml-[90px] sm:h-[300px] sm:w-[300px]" />
        </div>
        <div className="mt-[110px]"><BodyUserAccount/></div>
        <div className="mt-[40px]"><MenubarDesktop/></div>
    </div>
  );
}

