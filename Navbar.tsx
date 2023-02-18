import React from "react";
import Image from "next/image";
import globe from "@/public/globe.svg"
import bars from '@/public/bars.svg'

const  Navbar:React.FC = () => {
    return(
        <nav className={'w-full flex justify-between items-center'}>
            <button aria-label={'language'}>
                <Image src={globe} alt={'language'} width={10} height={10}/>
            </button>
            <div className={'flex gap-2 items-center relative'}>
                <button className={'md:hidden'} aria-label={'navigation'}>
                    <Image src={bars} alt={'navigation'} width={10} height={10}/>
                </button>
                <ul className={'hidden absolute md:flex md:relative md:items-center'}>
                    <li className={'cursor-pointer'}>Home</li>
                    <li className={'cursor-pointer'}>Events</li>
                    <li className={'cursor-pointer'}>About Us</li>
                    <li className={'cursor-pointer'}>Contact Us</li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar