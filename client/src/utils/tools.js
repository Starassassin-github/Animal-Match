import CircularProgress from '@mui/material/CircularProgress';
import { toast } from 'react-toastify';
import cookie from 'react-cookies';
import Animal_MatchLogo from '../images/Animal_MatchLogo.png';
import aniloading from '../images/ani-loading.svg';

export const loading = () => {
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

export const errorHelper = (formik,values) => ({
    error: formik.errors[values] && formik.touched[values] ? true :false,
    helperText: formik.errors[values] && formik.touched[values] ? formik.errors[values]:null
})

export const Loader = () => (
    <div className='root_loader'>
        <CircularProgress/>
    </div>
)

export const showToast = (type,msg) => {
    switch(type){
        case 'SUCCESS':
            toast.success(msg,{
                position: toast.POSITION.BOTTOM_RIGHT
            })
        break;
        case 'ERROR':
            toast.error(msg,{
                position: toast.POSITION.BOTTOM_RIGHT
            })
        break;
        default:
            return false

    }
}


export const getTokenCookie = () => cookie.load('x-access-token');
export const removeTokenCookie = () => cookie.remove('x-access-token',{path:'/'});
export const getAuthHeader = () => {
    return { headers:{'Authorization':`Bearer ${getTokenCookie()}`}}
}
