// import
import { useState, useRef, useEffect } from "react";

// db
import db from '../../../database/posts.json'

// helper
import { ButtonMUI, errorHelper, Loader, PostCard } from '../../../utils/tools';




export default function ReadPost() {

    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        setPosts(db);
        
        return () => {
            setPosts([]);
        }

    }, []);


    return (
        <div>
            <div className="flex flex-nowrap text-center bg-[#EBC8F1] ">
                <div className="h-screen w-screen bg-[#EBC8F1]">
                    <h2>Read Post</h2>
                    <div className="bg-[#EBC8F1]">
                        {
                            posts.length > 0 ? (
                                <div className="flex flex-row flex-wrap justify-around grid-cols-2">
                                    { posts.map((item) => {
                                        return (
                                            <PostCard
                                                item={item}
                                                key={item._id}
                                            />
                                        )
                                    }) }
                                </div>
                            ) : null 
                        }
                    </div>
                </div>
            </div>
        </div>
    );

}