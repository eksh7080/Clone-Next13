import Link from "next/link";
import MenuItem from "./MenuItem"
import {AiFillHome} from 'react-icons/ai';
import {BsInfoCircleFill} from 'react-icons/bs';
import DarkMode from "./DarkMode";

const Header = ()  => {
    return (
        <header className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
            <div className='flex'>
                <MenuItem title={'HOME'} address={'/'} Icon={AiFillHome}/>
                <MenuItem title={'ABOUT'} address={'/about'} Icon={BsInfoCircleFill}/>
            </div>

            <div className="flex items-center space-x-5 ">
                <DarkMode />
                <Link href="/">
                    <h2 className="text-2xl">
                        <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDB</span>
                        <span className="text-xl hidden sm:inline mr-1">Clone</span>
                    </h2>
                </Link>
            </div>
            
            </header>
    )
}

export default Header