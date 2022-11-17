import Animal_MatchLogo from '../../images/Animal_MatchLogo.png';
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Login() {
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const goToRegister = () => {
        console.log(usernameInput)
        console.log(passwordInput)
      }

    const loginAccount = async() => {
        console.log("use check email")
        const response = await axios.post(`${process.env.REACT_APP_URL}/users/login`, { username: usernameInput, password: passwordInput});
        if (response.status === 200 || response === 201) {
            console.log(response.data)
        } else if (response.status === 400){
            goToRegister()
        }
    }

    return (
        <div className='flex flex-col bg-[#FEE39F] sm:bg-[#FEE39F] h-screen w-screen place-items-center place-content-center'>
        
            <div>
                <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-[#FF66C4] to-[#8F00FF] font-bold text-7xl w-[200px] h-[90px] sm:text-[90px] sm:w-[240px] sm:h-[110px]'>Login</h1>
                <img src={Animal_MatchLogo} alt="Animal_MatchLogo" className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] mt-6 mb-4 bg-[#f8e182] rounded-full shadow-lg" />
            </div>
            
            <div className="flex flex-col w-full max-w-xs">
                <div className="rounded pt-6 pb-8 mb-4" >
                    <div className="rounded-full mb-4 flex place-items-center bg-clip-padding bg-gradient-to-r from-[#FF66C4] to-[#8F00FF] appearance-none border rounded w-full px-3 focus:outline-none focus:shadow-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="3 3 20 18" stroke-width="3" stroke="white" className="ml-1 w-6 h-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        <h1 className="text-3xl pb-2 px-2 text-white">|</h1>
                        <input className="rounded-l-xl rounded-r-3xl appearance-none rounded w-full text-gray-700 py-2 px-2 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={(text) => setUsernameInput(text.target.value)} required></input>
                    </div>
                    
                    <div className="rounded-full mb-6 flex place-items-center bg-clip-padding bg-gradient-to-r from-[#FF66C4] to-[#8F00FF] appearance-none border rounded w-full px-3 focus:outline-none focus:shadow-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2 3 20 28" stroke-width="3" stroke="white" className="ml-1 w-6 h-12 pt-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <h1 className="text-3xl pb-2 px-2 text-white">|</h1>         
                        <input className="rounded-l-xl rounded-r-3xl appearance-none rounded w-full text-gray-700 py-2 px-2 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" onChange={(text) => setPasswordInput(text.target.value)} required></input>
                    </div>
                    
                    <div className="flex flex-col items-center">
                        <button className="bg-clip-padding bg-gradient-to-b from-[#FF66C4] to-[#8F00FF] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 text-white font-bold py-2 px-10 rounded-lg shadow-md shadow-[#8F00FF]/80" 

                                onClick={() => loginAccount()}
                        >
                            Login
                        </button>
                        <button className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 w-50 h-12 underline underline-offset-1 pt-2" onClick={()=>{goToRegister()}}>
                            Create new account   
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
 
    );
}