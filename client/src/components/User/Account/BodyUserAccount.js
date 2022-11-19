
export default function BodyUserAccount(props) {

    // destruc
    const { fullname, phone, email, address } = props.item

    return (

        <div className='flex flex-col h-screen w-screen  relative min-h-full place-items-center'>

            <div className='ml-[20px]'>
                <div className="sm:mt-[130px] sm:text-left">
                    <div><h1 className="text-[32px] font-[700] sm:ml-[30px] text-[#8E3A7C] sm:text-[#4992F5] sm:text-[50px]">{fullname}</h1></div>
                </div>

                <div className="flex sm:mt-[30px] ">
                    <div className="bg-[#92d4f7] h-[40px] font-[400] w-[100px] rounded-full  shadow-lg shadow-indigo-500/50 ">
                        <h1 className="text-[22px] text-[#ffffff]">phone</h1>
                    </div>
                    <div><h1 className="font-[400] text-[22px] text-[#5E5E5E] ml-[25px] sm:border-solid sm:border-2 rounded-full sm:border-[#A4B8D4] sm:px-4 sm:hover:text-[28px]">{phone}</h1></div>
                </div>

                <div className="flex mt-[20px] ">
                    <div className="bg-[#92d4f7] h-[40px] font-[400] w-[100px] rounded-full  shadow-lg shadow-indigo-500/50 ">
                        <h1 className="text-[22px] text-[#ffffff]">email</h1>
                    </div>
                    <div> <h1 className="font-[400] text-[22px] text-[#5E5E5E] ml-[25px] sm:border-solid sm:border-2 rounded-full sm:border-[#A4B8D4] sm:px-4 sm:hover:text-[28px]">{email}</h1></div>
                </div>

                <div className="flex mt-[20px] ">
                    <div className="bg-[#92d4f7] h-[40px] font-[400] w-[200px] rounded-full  sm:w-[120px] shadow-lg shadow-indigo-500/50 ">
                        <h1 className="text-[22px] text-[#ffffff]">address</h1>
                    </div>
                    <div><h1 className="font-[400] text-[22px] text-[#5E5E5E] ml-[25px] mr-[50px] sm:mr-[70px] text-left sm:border-solid sm:border-2 rounded-full sm:border-[#A4B8D4] sm:px-4 sm:hover:text-[28px]">{address}</h1></div>
                </div>
            </div>
        </div>
    );
}