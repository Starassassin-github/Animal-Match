import React, { useState, useRef, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

// helper
import { showToast } from "../../../utils/tools";

import SettingEditIcon from '../../../images/SettingEditIcon.png'
import profileUserTest from '../../../images/profileUserTest.jpg';

import AuthGlobal from "../../../Context/store/AuthGlobal";


export default function BodyUserSetting() {

  let params = useParams();

  let navigate = useNavigate()

  const effectRan = useRef(false);

  const context = useContext(AuthGlobal);

  const idAuth = context.stateUser.user.userId;

  // Load
  const [nameSetting, setnameSetting] = useState("");
  const [phoneSetting, setphoneSetting] = useState("");
  const [emailSetting, setEmailSetting] = useState("");
  const [addressSetting, setAddressSetting] = useState("");

  const [profileUser, setProfileUser] = useState("");
  const [image, setImage] = useState()


  const handleSubmit = () => {

    if (
      nameSetting.trim() === "" ||
      phoneSetting.trim() === "" ||
      emailSetting.trim() === "" ||
      addressSetting.trim() === ""
    ) {
      const msg = "Something Wrong! Please Complete the information"
      showToast('ERROR', msg)
    } else {

      let formData = new FormData();

      if (image) {
          formData.append("image", image)
      }

      const configHeaders = {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      }


      formData.append("fullname", nameSetting.trim())
      formData.append("email", emailSetting.trim())
      formData.append("address", addressSetting.trim())
      formData.append("phone", phoneSetting.trim())



      const editHandlerUser = async () => {
        await axios.put(`/api/v1/users/${idAuth}`, formData, configHeaders)
          .then((res) => {
            if (res.status === 200 || res.status === 201) {
              const msg = "Profile Updated!"
              showToast('SUCCESS', msg)
              setTimeout(() => {
                navigate(`/users/profile/${idAuth}`)
              }, 2000)
            }
          })
          .catch((error) => {
            const msg = "Something Wrong!"
            showToast('ERROR', msg)
          })

      }

      editHandlerUser()
    }
  }

  useEffect(() => {

    if (effectRan.current === false) {

      const url = `/api/v1/users/${params.id}`;

      const fetchPost = async () => {
        try {
          const response = await axios.get(url);
          if (response.status === 200 || response.status === 201) {
            setnameSetting(response.data.fullname)
            setphoneSetting(response.data.phone)
            setEmailSetting(response.data.email)
            setAddressSetting(response.data.address)
            setProfileUser(response.data.image)
          }

        } catch (error) {
          const msg = "Something Wrong! Pleases try again"
          showToast('ERROR', msg)
        }
      };

      fetchPost();

      return () => {

        effectRan.current = true
      };
    }
  }, []);


  return (
    <div>
      <div>
        <div className="bg-[#FEE39F] h-[120px] sm:h-[70px] sm:bg-gradient-to-r from-[#D3B3E4] to-[#E4B3E2] flex">
          {
            (profileUser === "") || (profileUser === undefined) ?
              <img src={profileUserTest} alt="profileUserTest" className="w-[230px] h-[230px] sm:border-[#C999C7] border-solid border-8 border-[#ffffff] rounded-full ml-[40px] sm:h-[300px] sm:w-[300px]" />
              :
              <img src={profileUser} alt="profileUser" className="w-[230px] h-[230px] sm:border-[#C999C7] border-solid border-8 border-[#ffffff] rounded-full ml-[40px] sm:h-[300px] sm:w-[300px]" />
          }
        </div>
      </div>


      <div className='flex flex-col h-screen w-screen relative min-h-full bg-[#EFE3C0] mt-[110px]  sm:mt-[230px]'>



        <div className="sm:mt-[0px] lg:ml-[200px] pr-[50px] ml-[20px] mr-[20px] ">
          <div className="flex flex-row-reverse">
            <button onClick={() => handleSubmit()} className=" bg-[#E77B60] text-[#ffffff] text-[16px] font-[600] mr-[70px] w-[70px] pl-[10px] pr-[10px] pt-[5px] pb-[5px] rounded-full">submit</button> </div>
          <label className="text-[25px] font-[600] text-left flex">name<img src={SettingEditIcon} alt="SettingEditIcon" className="w-[25px] h-[25px] ml-[5px] " /></label>
          <input
            className="bg-[#B884B9] pl-[20px] w-full h-[40px] text-left font-[400]  mt-[10px] rounded-full shadow-lg shadow-indigo-500/50 text-[22px] text-[#ffffff] sm:text-[#ffffff] sm:text-[22px] "
            type="text"
            name="name"
            value={nameSetting}
            required
            onChange={(e) => setnameSetting(e.target.value)}

          />

          <label className="text-[25px] mt-[15px] font-[600] text-left  flex">phone<img src={SettingEditIcon} alt="SettingEditIcon" className="w-[25px] h-[25px] ml-[5px] " /></label>
          <input
            className="bg-[#B884B9] pl-[20px] w-full h-[40px] text-left font-[400]  mt-[10px] rounded-full shadow-lg shadow-indigo-500/50 text-[22px] text-[#ffffff] sm:text-[#ffffff] sm:text-[22px] "
            type="text"
            name="phone"
            value={phoneSetting}
            required
            onChange={(e) => setphoneSetting(e.target.value)}

          />


          <label className="text-[25px] mt-[15px] font-[600] text-left  flex">email<img src={SettingEditIcon} alt="SettingEditIcon" className="w-[25px] h-[25px] ml-[5px] " /></label>
          <input
            className="bg-[#B884B9] pl-[20px] w-full h-[40px] text-left font-[400]  mt-[10px] rounded-full shadow-lg shadow-indigo-500/50 text-[22px] text-[#ffffff] sm:text-[#ffffff] sm:text-[22px] "
            type="text"
            name="email"
            value={emailSetting}
            required
            onChange={(e) => setEmailSetting(e.target.value)}

          />


          <label className="text-[25px] mt-[15px] font-[600] text-left flex">address<img src={SettingEditIcon} alt="SettingEditIcon" className="w-[25px] h-[25px] ml-[5px] " /></label>
          <input
            className="bg-[#B884B9] pl-[20px] w-full h-[40px] text-left font-[400]  mt-[10px] rounded-full shadow-lg shadow-indigo-500/50 text-[22px] text-[#ffffff] sm:text-[#ffffff] sm:text-[22px] "
            type="text"
            name="address"
            value={addressSetting}
            required
            onChange={(e) => setAddressSetting(e.target.value)}

          />
        </div>

        <div>
            <input
              size="60"
              className="mt-20 mx-auto my-auto text-sm text-grey-500 
                                    file:mr-5 file:py-3 file:px-10
                                    file:rounded-full file:border-0
                                    file:text-md file:font-semibold  file:text-white
                                    file:bg-gradient-to-r file:from-blue-600 file:to-amber-600
                                    hover:file:cursor-pointer hover:file:opacity-80 p-2 border-solid border-4 border-blue-500 rounded-lg
                                    sm:flex sm:flex-col
                      "
              onChange={(e) => {
                setProfileUser(URL.createObjectURL(e.target.files[0]))
                setImage(e.target.files[0])
              }}
              type="file"
            />
          </div>

      </div>
    </div>
  );
}