// import
import React, { useState, useRef, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Context
import AuthGlobal from '../../Context/store/AuthGlobal';

// helper
import { ImageCart, showToast } from "../../utils/tools";


export default function DisplayPost() {

    let params = useParams();

    const context = useContext(AuthGlobal)

    const effectRan = useRef(false);



    const [nameAnimalDisplayPost, setNameAnimalDisplayPost] = useState("");
    const [ageAnimalDisplayPost, setAgeAnimalDisplayPost] = useState("")
    const [descriptionDisplayPost, setDescriptionDisplayPost] = useState("")
    const [richDescriptionDisplayPost, setRichDescriptionDisplayPost] = useState("")
    const [typeDisplayPost, setTypeDisplayPost] = useState("")
    const [locationDisplayPost, setLocationDisplayPost] = useState("")
    const [images, setImages] = useState([]);

    useEffect(() => {

        if (effectRan.current === false) {

            const url = `/api/v1/posts/${params.id}`;

            const fetchPost = async () => {
                try {
                    const response = await axios.get(url);
                    if (response.status === 200 || response.status === 201) {
                        setNameAnimalDisplayPost(response.data.title)
                        setAgeAnimalDisplayPost(response.data.age)
                        setDescriptionDisplayPost(response.data.description)
                        setRichDescriptionDisplayPost(response.data.rich_description)
                        setTypeDisplayPost(response.data.animal_type)
                        setLocationDisplayPost(response.data.location)
                        setImages(response.data.images)
                    }

                } catch (error) {
                    const msg = "Something Wrong! Pleases try again"
                    showToast('ERROR', msg)
                }
            };

            fetchPost();

            return () => {
                setNameAnimalDisplayPost("")
                setAgeAnimalDisplayPost("")
                setDescriptionDisplayPost("")
                setRichDescriptionDisplayPost("")
                setTypeDisplayPost("")
                setLocationDisplayPost("")
                setImages([])
                effectRan.current = true
            };
        }
    }, []);

    return (
        <div>
            <div name="mobile">
                <span class="lg:hidden block">
                    <div className="flex flex-nowrap text-center bg-[#e5b5ed] ">
                        <div className=" w-screen bg-[#f5baff] flex  place-items-center  flex-col">
                            <div className="bg-[#f5baff]  mt-[30px]">
                                <ImageCart images={images} />
                            </div>
                            <div className="ml-[40px] mr-[40px] bg-[#fff] mt-[10px] font-[700]  flex rounded-2xl border-2 border-[#EDFF35]">
                                <h1 className="text-[40px] text-[#3459FF] ml-[30px]">{nameAnimalDisplayPost}</h1>
                                <h1 className="pl-[25px] text-[#4A91FF] text-[40px]">{ageAnimalDisplayPost}</h1>
                            </div>
                            <div className="text-left">
                                <div className="">
                                    <div className="ml-[30px] bg-[#fff] w-[150px] rounded-full mt-[30px] sm:w-[190px] border-2 border-[#E628CE]">
                                        <h1 className="text-[23px] ml-[20px] sm:text-[30px]">description</h1>
                                    </div>
                                    <div className=" ml-[40px] mr-[40px] mt-[20px] bg-[#F8D4F3] w-[370px] border-2 border-[#d487ca]  sm:w-[540px]">
                                        <h1 className="text-[23px] text-left text-[#6844E3] sm:text-[30px]">&nbsp; : {descriptionDisplayPost}</h1>
                                    </div></div>

                                <div className="">
                                    <div className="ml-[30px] bg-[#fff] w-[200px] rounded-full mt-[15px] sm:w-[250px] border-2 border-[#E628CE]">
                                        <h1 className="text-[23px] ml-[20px] sm:text-[30px]">rich description</h1>
                                    </div>
                                    <div className="ml-[40px]  mt-[20px] bg-[#F8D4F3] w-[370px] border-2 border-[#d487ca]  sm:w-[540px]">
                                        <h1 className="text-[23px] text-left text-[#6844E3] sm:text-[30px]">&nbsp;  : {richDescriptionDisplayPost}</h1>
                                    </div></div>

                                <div className="">
                                    <div className="ml-[30px] bg-[#fff] w-[90px] rounded-full mt-[30px] sm:w-[100px] border-2 border-[#E628CE]">
                                        <h1 className="text-[23px] ml-[20px] sm:text-[30px]">type</h1>
                                    </div>
                                    <div className="ml-[40px]  mt-[20px] bg-[#F8D4F3] w-[370px] border-2 border-[#d487ca]  sm:w-[540px]">
                                        <h1 className="text-[23px] text-left text-[#6844E3] sm:text-[30px]">&nbsp;  : {typeDisplayPost}</h1>
                                    </div></div>

                                <div className="">
                                    <div className="ml-[30px] bg-[#fff] w-[120px] rounded-full mt-[15px] sm:w-[145px] border-2 border-[#E628CE]">
                                        <h1 className="text-[23px] ml-[20px] sm:text-[30px]">location</h1>
                                    </div>
                                    <div className="ml-[40px]  mt-[15px] mb-[30px] bg-[#F8D4F3] w-[370px] border-2 border-[#d487ca]  sm:w-[540px]">
                                        <h1 className="text-[23px] text-left text-[#6844E3] sm:text-[30px]">&nbsp;  : {locationDisplayPost}</h1>
                                    </div></div></div>
                        </div>
                    </div>
                </span>
            </div>


            <div name="desktop">
                <span class="hidden lg:block">
                    <div className="flex flex-nowrap text-center bg-[#EBC8F1] ">
                        <div className="h-screen w-screen bg-[#EBC8F1] mt-[100px] ">
                            <div className="bg-[#EBC8F1] ml-[65px] flex">
                                <ImageCart images={images} />

                                <div>
                                    <div className="ml-[40px] mr-[40px] bg-[#fff] mt-[30px] font-[700] flex rounded-2xl border-2 border-[#EDFF35]">
                                        <h1 className="text-[50px] text-[#3459FF] ml-[30px]">{nameAnimalDisplayPost}</h1>
                                        <h1 className="pl-[25px] text-[#4A91FF] text-[50px]">{ageAnimalDisplayPost}</h1>
                                    </div>
                                    <div className="ml-[30px] bg-[#fff] w-[180px] rounded-full mt-[30px]  border-2 border-[#E628CE]">
                                        <h1 className="text-[20px] sm:text-[30px] ">description</h1>
                                    </div>
                                    <div className=" ml-[60px] mr-[30px] mt-[15px]  bg-[#F8D4F3] border-2 flex border-[#d487ca] ">
                                        <h1 className="text-[20px] text-left sm:text-[30px] text-[#6844E3]">&nbsp;  : {descriptionDisplayPost}</h1>
                                    </div>
                                    <div className="ml-[30px] bg-[#fff] w-[250px] rounded-full mt-[35px]  border-2 border-[#E628CE]">
                                        <h1 className="text-[20px] sm:text-[30px]">rich description</h1>
                                    </div>
                                    <div className="ml-[60px]  mt-[15px] bg-[#F8D4F3] border-2 flex border-[#d487ca] ">
                                        <h1 className="text-[20px] text-left sm:text-[30px] text-[#6844E3]">&nbsp;  : {richDescriptionDisplayPost}</h1>
                                    </div>
                                    <div className="ml-[30px] bg-[#fff] w-[160px] rounded-full mt-[35px]  border-2 border-[#E628CE]">
                                        <h1 className="text-[20px] sm:text-[30px]">type</h1>
                                    </div>
                                    <div className="ml-[60px]  mt-[15px] bg-[#F8D4F3] border-2 flex border-[#d487ca] ">
                                        <h1 className="text-[20px] text-left sm:text-[30px] text-[#6844E3]">&nbsp;  : {typeDisplayPost}</h1>
                                    </div>
                                    <div className="ml-[30px] bg-[#fff] w-[160px] rounded-full mt-[35px]  border-2 border-[#E628CE]">
                                        <h1 className="text-[20px] sm:text-[30px]">location</h1>
                                    </div>
                                    <div className="ml-[60px]  mt-[15px] mb-[30px] bg-[#F8D4F3] border-2 flex border-[#d487ca] ">
                                        <h1 className="text-[20px] text-left sm:text-[30px] text-[#6844E3]">&nbsp;  : {locationDisplayPost}</h1>
                                    </div>
                                </div></div></div>
                    </div>
                </span>
            </div>
        </div>
    );

}