// import
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// ICON
import { IconContext } from "react-icons";
import { FaRegUserCircle, FaWindowClose } from 'react-icons/fa';
import { BsFileEarmarkPost } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoLogOutOutline } from 'react-icons/io5';



// Context
import AuthGlobal from "../../Context/store/AuthGlobal";
import { logoutUser } from "../../Context/actions/Auth.actions";


// import 
import LogoAndName from './LogoAndName';

export default function Hamburger() {

  const context = useContext(AuthGlobal);
  const idAuth = context.stateUser.user.userId

  let navigate = useNavigate()

  const [isNavOpen, setIsNavOpen] = useState(false);


  return (
    <div>
      <div className="flex text-center justify-between relative bg-[#FCE5FF] sm:bg-[#EBC8F1] h-[120px] ">
        <LogoAndName />
        <nav>
          <section className="MOBILE-MENU flex sm:hidden ">
            <div
              className="HAMBURGER-ICON space-y-2 mt-[37px] ml-[40px]"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>


            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav "}>

              <div
                className="absolute top-0  px-4 py-4 flex cursor-pointer"
                onClick={() => setIsNavOpen(false)}
              >
                <LogoAndName />
                <svg
                  className="h-8 w-8 text-gray-600 ml-[20px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                
              </div>

              {
                isNavOpen ? 
                <div onClick={() => setIsNavOpen((prev) => !prev)} className="border border-solid rounded-md  w-[6em] py-4 grid  justify-items-center bg-[#fff] cursor-pointer border-2 border-[#FF31E9]">
                  <FaWindowClose fontSize="3.5em" color="#FF31E9" />
                </div>
                : null
              }
        
              <ul className="flex flex-col items-center  min-h-[250px] z-[100]">

                <div className="flex bg-[#ffffff65]  h-[80px] w-[350px]  rounded-full border-solid border-2 shadow-lg shadow-[#eb88e1] border-[#FF31E9] hover:bg-[#ffffff] active:bg-[#FFF0B4]  cursor-pointer">
                  <IconContext.Provider value={{ size: "50px" }}>
                    <div className="ml-[25px] mt-[15px] text-[#474747] hover:text-[#3575F4]">
                      <FaRegUserCircle />
                    </div>
                  </IconContext.Provider>
                  <li className="my-[15px]  uppercase  text-[30px] ml-[40px] font-['Poppins'] text-[#6A6A6A] hover:text-[#3575F4]">
                    <a href={`/users/profile/${idAuth}`}>Profile</a>
                  </li>
                </div>

                <div className="mt-[30px] flex bg-[#ffffff65]  h-[80px] w-[350px]  rounded-full border-solid border-2 shadow-lg shadow-[#eb88e1] border-[#FF31E9] hover:bg-[#ffffff] active:bg-[#FFF0B4] cursor-pointer">
                  <IconContext.Provider value={{ size: "50px" }}>
                    <div className="ml-[25px] mt-[15px] text-[#474747] hover:text-[#3575F4]">
                      <IoSettingsOutline />
                    </div>
                  </IconContext.Provider>
                  <li className="  my-[15px]  uppercase  text-[30px] ml-[40px] font-['Poppins'] text-[#6A6A6A] hover:text-[#3575F4]">
                    <a href={`/users/profile/setting/${idAuth}`}>Setting</a>
                  </li></div>

                <div className="mt-[30px] flex bg-[#ffffff65]  h-[80px] w-[350px]  rounded-full border-solid border-2 shadow-lg shadow-[#eb88e1] border-[#FF31E9] hover:bg-[#ffffff] active:bg-[#FFF0B4] cursor-pointer">
                  <IconContext.Provider value={{ size: "50px" }}>
                    <div className="ml-[25px] mt-[15px] text-[#474747] hover:text-[#3575F4]">
                      <IoLogOutOutline />
                    </div>
                  </IconContext.Provider>
                  <li className=" my-[15px]  uppercase  text-[30px] ml-[40px] font-['Poppins'] text-[#6A6A6A] hover:text-[#3575F4] ">
                    <a onClick={() => [ logoutUser(context.dispatch, navigate('/login')) ]}>Sign Out</a>
                  </li></div>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-2 sm:flex  ">
            <li className="bg-[#FEE9FF] hover:bg-[#C6F7F6] mt-[27px] py-3 px-4 rounded-full  border-[1px] border-[#FF00C5] shadow shadow-blue-500/70 cursor-pointer">
              <a href={`/users/profile/${idAuth}`}><span className="hover:text-[#3167de]">Profile</span></a>
            </li>
            <li className="bg-[#FEE9FF] hover:bg-[#faeac0] mt-[27px] py-3 px-4 rounded-full border-[1px] border-[#FF00C5] shadow shadow-blue-500/70 cursor-pointer">
              <a href={`/users/profile/setting/${idAuth}`}><span className="hover:text-[#3167de]">Setting</span></a>
            </li>
            <li className="bg-[#FEE9FF] hover:bg-[#ffd2df] mt-[27px] py-3 px-4 rounded-full border-[1px] border-[#FF00C5] shadow shadow-blue-500/70 cursor-pointer">
              <a onClick={() => [ logoutUser(context.dispatch, navigate('/login')) ]}><span className="hover:text-[#3167de]">Sign Out</span></a>
            </li>
            <li>
              <a href="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
            </li>
          </ul>
        </nav>

        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 100;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background-color: #EBC8F1;
      }

      @media screen and (max-width: 624px){
        
      }
    `}</style>
      </div>
      <div className="flex text-center h-[3px] bg-[#EBC8F1] sm:bg-gradient-to-r from-[#EF2DFF] to-[#F0DE00] ">
        <h1 >&nbsp;</h1>
      </div>
      <div className="flex text-center h-[10px] bg-[#EBC8F1] sm:bg-gradient-to-r from-[#FF00C5] to-[#B870E7] ">
        <h1 >&nbsp;</h1>
      </div>
      <div className="flex text-center h-[3px] bg-[#EBC8F1] sm:bg-gradient-to-r from-[#F0DE00] to-[#9DFCFF] ">
        <h1 >&nbsp;</h1>
      </div>
    </div>
  );
}
