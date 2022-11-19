// import
import React, { useState, useRef, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


// helper
import { PostCard, showToast } from '../../../utils/tools';


export default function ReadPost() {

    let params = useParams();


    const effectRan = useRef(false);

    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

    const [arrayPostsData, setArrayPostsData] = useState([])


    useEffect(() => {

        if (effectRan.current === false) {

            const url = `/api/v1/users/favorites/${params.id}`;

            const fetchPost = async () => {
                try {
                    const response = await axios.get(url);
                    if (response.status === 200 || response.status === 201) {
                        for (let index = 0; index < response.data.length; index++) {
                            const element = response.data[index];
                            let resdata = await axios.get(`/api/v1/posts/${element}`)
                            setArrayPostsData(arrayPostsData => [...arrayPostsData, resdata.data])
                        }
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
            <div className="flex flex-nowrap text-center bg-[#EBC8F1] ">
                <div className="h-screen w-screen bg-[#EBC8F1]">
                    <h1 className="mt-5 text-xl">{arrayPostsData.length} Matches</h1>
                    <div className="bg-[#EBC8F1]">
                        <div class="divide-y-4 divide-black">
                            <div>&nbsp;</div>
                            <div>&nbsp;</div>
                        </div>
                        {
                            arrayPostsData.length > 0 ? (
                                <div className="flex flex-row flex-wrap justify-around grid-cols-2">
                                    {arrayPostsData.map((item) => {
                                        return (
                                            <PostCard
                                                item={item}
                                                key={item._id}
                                            />
                                        )
                                    })}
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );

}