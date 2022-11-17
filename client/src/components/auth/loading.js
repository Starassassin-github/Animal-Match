import Animal_MatchLogo from '../../images/Animal_MatchLogo.png';
import aniloading from '../../component/auth/ani-loading.svg';

export default function Loading() {
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