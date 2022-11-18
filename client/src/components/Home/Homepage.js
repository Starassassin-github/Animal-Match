import Hamburger from '../hamburger/hamburger';
import MenubarDesktop from '../menubarDesktop';
import PageBody from './pageBody';


export default function Homepage() {
  
  return (
    <div  className='  w-screen relative  '>
        <div> <Hamburger /></div>
        <div><PageBody /></div>
        <div><MenubarDesktop /></div>
    </div>
  );
}