import React, {useContext, useState} from "react";
import Image from "next/image";
import globe from "@/public/globe.svg"
import bars from '@/public/bars.svg'
import {LocaleContext} from "@/components/LocaleContext";
import {useRouter} from "next/router";

const  Navbar:React.FC = () => {
    const context =useContext(LocaleContext)
    const [localesVisible, setLocalesVisible] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const router = useRouter()

    const changeLocale =async (e:React.SyntheticEvent<HTMLButtonElement>) => {
        if (!(e.target instanceof HTMLButtonElement)) {
            return;
        }
        const locale = e.target.dataset.value || context?.locale
        await router.push('/','/', {locale})
    }

    return(
        <nav dir={`${context?.locale ==='fa' ? 'rtl':'ltr'}`} className={`w-full justify-between items-center px-3 py-4 bg-blue-400 flex`}>
            <div className={'relative'}>
            <button aria-label={'language'} className={'hover:bg-green-400 px-3 py-2 rounded-full'} onClick={()=>setLocalesVisible(prev=>!prev)}>
                <Image src={globe} alt={'language'} width={25} height={25}/>
            </button>
                {localesVisible && <div className={'absolute top-full w-20 bg-green-400 flex flex-col'}>
                    {context?.locales?.map((locale, index) => <button key={index} onClick={changeLocale} data-value={locale} className={'p-3 border-b hover:bg-green-600'}>{context?.translation[locale]}</button>)}
                </div>}
            </div>
            <div className={'flex gap-2 items-center relative bg-re'}>
                <button className={'md:hidden hover:bg-green-400 px-3 py-2 rounded-full'} aria-label={'navigation'} onClick={()=>setMenuOpen(prev=>!prev)}>
                    <Image src={bars} alt={'navigation'} width={25} height={25}/>
                </button>
                <ul className={`absolute w-24 top-full ${menuOpen && 'open'} ${context?.locale ==='fa' ? 'menu-left' : 'menu-left' } bg-neutral-300 rounded-xl md:rounded-none md:w-auto md:flex md:flex-row md:bg-transparent md:relative md:items-center md:gap-2.5`}>
                    <li className={'cursor-pointer rounded-xl hover:bg-green-400 px-3 py-2'}>{context?.translation['home']}</li>
                    <li className={'cursor-pointer rounded-xl hover:bg-green-400 px-3 py-2'}>{context?.translation['events']}</li>
                    <li className={'cursor-pointer rounded-xl hover:bg-green-400 px-3 py-2'}>{context?.translation['about']}</li>
                    <li className={'cursor-pointer rounded-xl hover:bg-green-400 px-3 py-2'}>{context?.translation['contact']}</li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar