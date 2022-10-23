import { IconContext } from "react-icons";
import Animal_MatchLogo from '../../images/Animal_MatchLogo.png';
import { IoArrowBackCircleSharp } from 'react-icons/io5';


export default function LogoAndName() {
  const strHead = <h1 className="sm:text-[40px] mt-[35px]  text-[30px] text-[#DC00C1] font-['Poppins'] ">ANIMAL MATCH</h1>
  return (
    <div className="flex">
        <IconContext.Provider value={{ size: "40px"}}>
          <div className="mt-[25px]">
            <IoArrowBackCircleSharp />
          </div>
        </IconContext.Provider>
        <img src={Animal_MatchLogo} alt="Animal_MatchLogo" className="w-[100px] h-[100px] text-center sm:w-[120px]  sm:h-[120px] " />
        {strHead}
    </div>
  );
}