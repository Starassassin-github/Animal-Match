import { toast } from 'react-toastify';
import cookie from 'react-cookies';
import Animal_MatchLogo from '../images/Animal_MatchLogo.png';
import ImageTestpost from '../images/ImageTestPost.jpg';
import aniloading from '../images/ani-loading.svg';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export const PostCard = (props) => {


    const item = props.item

    return (
        <Card onClick={() => alert("Hello!")} className="w-96 mb-3 cursor-pointer">
            <CardHeader floated={false} className="h-80">
                <img src={ImageTestpost} alt="" />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    {item.title}
                </Typography>
                <Typography color="blue" className="font-medium" textGradient>
                    {item.age}
                </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2">
                <Button color='blue'>Say Hello</Button>
            </CardFooter>
        </Card>
    );
}

export const ButtonMUI = () => {
    return <Button>Button</Button>;
}


export const Loader = () => {
    return (
        <div className='flex flex-col bg-[#FEE39F] h-screen w-screen place-items-center place-content-center'>
            <div>
                <img src={Animal_MatchLogo} alt="Animal_MatchLogo" className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] mt-4" />

            </div>
            <div className='ml-16 -mt-8 sm:ml-20'>
                <img src={aniloading} className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] " alt="aniloading" />
            </div>
        </div>
    );
}

export const errorHelper = (formik, values) => ({
    error: formik.errors[values] && formik.touched[values] ? true : false,
    helperText: formik.errors[values] && formik.touched[values] ? formik.errors[values] : null
})


export const showToast = (type, msg) => {
    switch (type) {
        case 'SUCCESS':
            toast.success(msg, {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            break;
        case 'ERROR':
            toast.error(msg, {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            break;
        default:
            return false

    }
}


export const getTokenCookie = () => cookie.load('x-access-token');
export const removeTokenCookie = () => cookie.remove('x-access-token', { path: '/' });
export const getAuthHeader = () => {
    return { headers: { 'Authorization': `Bearer ${getTokenCookie()}` } }
}

export const ImageCart = (props) => {

    const slideImages = []
    const imagesProps = props.images

    imagesProps.forEach((element, index) => {
        slideImages.push({ url: element, caption: `Slide ${index + 1}` })
    });

    const Slideshow = () => {
        return (
            <div className="slide-container bg-[#eedcf1] w-[390px] h-[440px] sm:w-[550px] sm:h-[580px] lg:w-[490px] lg:h-[520px] rounded-r-2xl rounded-l-2xl border-8 border-[#F8FFAF]">
                {
                    slideImages.length > 0 ?
                        <Slide className=" ">
                            {slideImages.map((slideImage, index) => (
                                <div className="each-slide" key={index}>
                                    <div>
                                        <img src={slideImage.url} alt="" className="w-[390px] h-[420px]  sm:w-[550px] sm:h-[560px] lg:w-[490px] lg:h-[500px] rounded-r-2xl rounded-l-2xl" />

                                    </div>
                                </div>
                            ))}
                        </Slide>
                        :
                        null
                }

            </div>
        )
    }

    return (
        Slideshow()
    );
}

