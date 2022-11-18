import { IconContext } from "react-icons";
import Animal_MatchLogo from '../../images/Animal_MatchLogo.png';
import { IoArrowBackCircleSharp } from 'react-icons/io5';


export default function LogoAndName() {
  const strHead = <h1 className=" mt-[35px]  sm:mt-[20px] text-[30px] text-[#DC00C1] font-['Poppins'] hover:text-[#3D94F6]">ANIMAL MATCH</h1>
  return (
    <div className="flex flex-row w-screen relative">
        <img src={Animal_MatchLogo} alt="Animal_MatchLogo" className="w-[100px] h-[100px] text-center " />
        {strHead}
    </div>
  );
}