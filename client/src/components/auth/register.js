import Animal_MatchLogo from "../../images/Animal_MatchLogo.png";
import { Input } from "@material-tailwind/react";
import { useState } from "react";
// import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [date, setDate] = useState("1");
  const [month, setMonth] = useState("January");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("male");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const backToLogin = () => {
    console.log(name)
    console.log(lastname)
    console.log(date)
    console.log(month)
    console.log(year)
    console.log(gender)
    console.log(phone)
    console.log(address)
    console.log(username)
    console.log(password)
    console.log(confirmPassword)
    console.log(email)
  }

  const createAccount = async() => {
      // const response = await axios.post('http://',{
      //       name : name,
      //       lastname : lastname,
      //       date : date,
      //       month : month,
      //       year : year,
      //       gender : gender,
      //       phone : phone,
      //       address : address,
      //       username : username,
      //       password : password,
      //       email : email 
      // })
      // if (response.status === 200 || response.status === 201) {
      //   console.log(response.data)
      //   backToLogin()
      // } else if (response.status === 400){
      //   console.log("fail register")
      // }
  }

  return (
    <div className="flex flex-col bg-[#FEE39F] h-full w-screens place-items-center">
      <div>
        <h1 className="text-pink-500 font-bold text-5xl mt-10 underline decoration-fuchsia-600">Register</h1>
        <img
          src={Animal_MatchLogo}
          alt="Animal_MatchLogo"
          className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] mt-5 rounded-full bg-clip-padding bg-gradient-to-b from-[#FF66C4] to-[#8F00FF]"
        />
      </div>

      <div class="flex flex-col w-screen">
        <form class="flex flex-col rounded pt-6 pb-8 mb-4 sm:w-full place-items-center" onSubmit={createAccount}>
          <div class="md:flex md:flex-row">
            {/* Name */}
            <div class="rounded-full mb-3 flex place-items-start bg-white shadow appearance-none border px-3 focus:outline-none focus:shadow-outline w-[300px] md:mx-2 border-[#C505F5]">
              <input
                class="appearance-none rounded w-full text-gray-700 py-2 px-2 leading-tight focus:outline-none focus:shadow-outline"
                id="Name"
                type="text"
                placeholder="Name"
                onChange={(text) => {setName(text.target.value)}}
                name="Name"
                required
                ></input>
            </div>

            {/* Lastname */}
            <div class="rounded-full mb-3 flex place-items-end bg-white shadow appearance-none border px-3 focus:outline-none focus:shadow-outline w-[300px] md:mx-2 border-[#C505F5]">
              <input
                class="appearance-none rounded w-full text-gray-700 py-2 px-2 leading-tight focus:outline-none focus:shadow-outline"
                id="Lastname"
                type="text"
                placeholder="Lastname"
                onChange={(text) => {setLastname(text.target.value)}}
                required
              ></input>
            </div>
          </div>

          <div class="flex flex-row">
            {/* Monthhhhhhhhhhhhhhhhhhh */}
            <div>
              <div class="relative flex w-full">
              <div class="rounded-full mb-3 flex place-items-end bg-white shadow appearance-none border gray-100 py-0focus:outline-none focus:shadow-outline w-[130px] mx-2 border-[#C505F5]">
                <select class="rounded-full flex place-items-end bg-white px-1 gray-700 py-2 focus:outline-none focus:shadow-outline w-full mx-2 h-[37px]" onChange={(text) => {setMonth(text.target.value)}} required> 
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="่April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="่October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                </div>
              </div>
            </div>

            {/* date*/}
            <div>
              <div class="relative flex w-full">
              <div class="rounded-full mb-3 flex place-items-end bg-white shadow appearance-none border gray-100 py-0focus:outline-none focus:shadow-outline w-[100px] mx-2 border-[#C505F5]">
                <select class="rounded-full flex place-items-end bg-white px-1 gray-700 py-2 focus:outline-none focus:shadow-outline w-full mx-2 h-[37px]" onChange={(text) => {setDate(text.target.value)}} required>
                  <option value="่1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="่13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="่28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
                </div>
              </div>
            </div>

            {/* Year */}
            <div class="relative flex w-full mx-2">
            <div class="rounded-full mb-3 flex place-items-end bg-white shadow appearance-none border gray-100 px-3 py-0focus:outline-none focus:shadow-outline w-[100px] border-[#C505F5]">
              <input
                class="appearance-none rounded w-full text-gray-700 py-2 px-1 leading-tight focus:outline-none focus:shadow-outline"
                id="Year"
                type="int"
                placeholder="Year"
                onChange={(text) => {setYear(text.target.value)}}
                required
              ></input>
            </div>
            </div>
          </div>
        

          {/* Gender */}
          <div class="w-[300px]">
            <div class="relative flex w-full ">
            <div class="rounded-full mb-4 flex place-items-end bg-white shadow appearance-none border px-3 focus:outline-none focus:shadow-outline w-[300px] border-[#C505F5]">
              <select class="rounded-full flex place-items-end bg-white gray-700 px-1 py-2 focus:outline-none focus:shadow-outline h-[37px] w-[300px]" onChange={(text) => {setGender(text.target.value)}} required>
                <option value="male" >Male</option>
                <option value="female" >Female</option>
                <option value="other" >Other</option>
              </select>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div class="rounded-full mb-4 flex place-items-end bg-white shadow appearance-none border px-3 focus:outline-none focus:shadow-outline w-[300px] border-[#C505F5]">
            <input
              class="appearance-none rounded w-full text-gray-700 py-2 px-2 leading-tight focus:outline-none focus:shadow-outline"
              id="Phone"
              type="text"
              placeholder="Phone"
              onChange={(text) => {setPhone(text.target.value)}}
              required
            ></input>
          </div>

          {/* Address */}
          <div class="rounded-full mb-4 flex place-items-end bg-white shadow appearance-none border px-3 focus:outline-none focus:shadow-outline w-[300px] border-[#C505F5]">
            <input
              class="appearance-none rounded w-full text-gray-700 py-2 px-2 leading-tight focus:outline-none focus:shadow-outline"
              id="Address"
              type="text"
              placeholder="Address"
              onChange={(text) => {setAddress(text.target.value)}}
              required
            ></input>
          </div>

          {/* Username */}
          <div class="rounded-full mb-4 flex place-items-end bg-white shadow appearance-none border px-3 focus:outline-none focus:shadow-outline w-[300px] border-[#C505F5]">
            <input
              class="appearance-none rounded w-full text-gray-700 py-2 px-2 leading-tight focus:outline-none focus:shadow-outline"
              id="Username"
              type="text"
              placeholder="Username"
              onChange={(text) => {setUsername(text.target.value)}}
              required
            ></input>
          </div>

          {/*Password */}
          <div class="rounded-full mb-4 flex place-items-end bg-white shadow appearance-none border px-3 focus:outline-none focus:shadow-outline w-[300px] border-[#C505F5]">
            <input
              class="appearance-none rounded w-full text-gray-700 py-2 px-2 leading-tight focus:outline-none focus:shadow-outline"
              id="Password"
              type="password"
              placeholder="Password"
              onChange={(text) => {setPassword(text.target.value)}}
              required
            ></input>
          </div>

          {/*Confirm Password */}
          <div class="rounded-full flex place-items-end bg-white shadow appearance-none border px-3 focus:outline-none focus:shadow-outline w-[300px] border-[#C505F5]">
            <input
              class="appearance-none rounded w-full text-gray-700 py-2 px-2 leading-tight focus:outline-none focus:shadow-outline"
              id="Password"
              type="password"
              placeholder="Confirm Password"
              onChange={(text) => {setConfirmPassword(text.target.value)}}
              required      
            ></input>  
          </div>
          <div>{password != confirmPassword ? <h1 class="text-[red]">Password and Confirm Password does not match.</h1> : null}</div>

          {/* Email */}
          <div class="rounded-full mt-4 mb-4 flex place-items-end bg-white shadow appearance-none border px-3 focus:outline-none focus:shadow-outline w-[300px] border-[#C505F5]">
            <input
              class="appearance-none rounded w-full text-gray-700 py-2 px-2 leading-tight focus:outline-none focus:shadow-outline"
              id="Email"
              type="email"
              placeholder="Email"
              onChange={(text) => {setEmail(text.target.value)}}
              required
            ></input>
          </div>

          {/* confirm and cancel */}
          <div class="flex flex-row items-center ">
            <button
              class="mr-2 bg-red-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-300 text-white font-bold py-2 px-10 rounded rounded-lg"
              type="button"
              onClick={()=>{backToLogin()}}
            >
              cancel
            </button>
            
            <button
              class="ml-2 bg-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300 text-white font-bold py-2 px-10 rounded rounded-lg"
              type="submit"
            >
              confirm
            </button>
          </div>


        </form> 

        

      </div>
    </div>
  );
}
