import { useState } from "react";
import SettingEditIcon from '../../../images/SettingEditIcon.png'
export default function BodyUserSetting() {
    // Load
    const [nameSetting, setnameSetting] = useState("Mamamusup");
    const [phoneSetting, setphoneSetting] = useState("091-111-1111");
    const [emailSetting, setEmailSetting] = useState("munim@gmail.com");
    const [addressSetting, setAddressSetting] = useState("1/234 bangkok thailand");

    

    const handleSubmit = (e) => {
        e.preventDefault();
        const user1 = {nameSetting,phoneSetting,emailSetting,addressSetting};
        console.log(user1)
    }


    const cheackDataSetting = () => {
      console.log(nameSetting)
      console.log(phoneSetting)
      console.log(emailSetting)
      console.log(addressSetting)
    }


    return ( 
              
      <div  className='flex flex-col h-screen w-screen relative min-h-full bg-[#EFE3C0] '>
        

        <form  onSubmit={handleSubmit}  className="sm:mt-[0px] lg:ml-[200px] pr-[50px] ml-[20px] mr-[20px] ">
            <div className="flex flex-row-reverse">
            <button type="submit" onClick={() => cheackDataSetting()}  value="Submit" className=" bg-[#E77B60] text-[#ffffff] text-[16px] font-[600] mr-[70px] w-[70px] pl-[10px] pr-[10px] pt-[5px] pb-[5px] rounded-full">submit</button> </div>
            <label className="text-[25px] font-[600] text-left flex">name<img src={SettingEditIcon} alt="SettingEditIcon" className="w-[25px] h-[25px] ml-[5px] " /></label>
                <input 
                    className="bg-[#B884B9] pl-[20px] w-full h-[40px] text-left font-[400]  mt-[10px] rounded-full shadow-lg shadow-indigo-500/50 text-[22px] text-[#ffffff] sm:text-[#ffffff] sm:text-[22px] "
                    type="text" 
                    name="name" 
                    value= {nameSetting} 
                    required
                    onChange={(e) => setnameSetting(e.target.value)}
                    
                    />  

        <label className="text-[25px] mt-[15px] font-[600] text-left  flex">phone<img src={SettingEditIcon} alt="SettingEditIcon" className="w-[25px] h-[25px] ml-[5px] " /></label>
                <input 
                    className="bg-[#B884B9] pl-[20px] w-full h-[40px] text-left font-[400]  mt-[10px] rounded-full shadow-lg shadow-indigo-500/50 text-[22px] text-[#ffffff] sm:text-[#ffffff] sm:text-[22px] "
                    type="text" 
                    name="phone" 
                    value= {phoneSetting} 
                    required
                    onChange={(e) => setphoneSetting(e.target.value)}
                    
                    />
        
        
        <label className="text-[25px] mt-[15px] font-[600] text-left  flex">email<img src={SettingEditIcon} alt="SettingEditIcon" className="w-[25px] h-[25px] ml-[5px] " /></label>    
                <input 
                    className="bg-[#B884B9] pl-[20px] w-full h-[40px] text-left font-[400]  mt-[10px] rounded-full shadow-lg shadow-indigo-500/50 text-[22px] text-[#ffffff] sm:text-[#ffffff] sm:text-[22px] "
                    type="text" 
                    name="email" 
                    value= {emailSetting} 
                    required
                    onChange={(e) => setEmailSetting(e.target.value)}
                    
                    /> 
        

        <label className="text-[25px] mt-[15px] font-[600] text-left flex">address<img src={SettingEditIcon} alt="SettingEditIcon" className="w-[25px] h-[25px] ml-[5px] " /></label>
                <input 
                    className="bg-[#B884B9] pl-[20px] w-full h-[40px] text-left font-[400]  mt-[10px] rounded-full shadow-lg shadow-indigo-500/50 text-[22px] text-[#ffffff] sm:text-[#ffffff] sm:text-[22px] "
                    type="text" 
                    name="address" 
                    value= {addressSetting} 
                    required
                    onChange={(e) => setAddressSetting(e.target.value)}
                    
                    />
        </form>

        
          
      </div>
    );
  }