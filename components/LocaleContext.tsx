import React, {ReactNode, createContext, useState, useEffect} from "react";
import {useRouter} from "next/router";
import en from "@/locales/en.json"
import fa from "@/locales/fa.json"

interface LocaleContextType {
    locale?:string,
    locales?:string[]
    translation: Record<string, string>
    switchLocale: (locale:string) => void
}
export const LocaleContext = createContext<LocaleContextType | null>(null)

const LocaleContextProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const router = useRouter()
    const [currentLocale, setCurrentLocale] = useState(router.locale)
    const [translation, setTranslation] = useState(currentLocale === 'en' ? en : fa)

    const switchLocale = (locale:string) => {
        setCurrentLocale(locale)
    }

    useEffect(()=>{
        setTranslation(router.locale === 'en' ? en : fa)
        setCurrentLocale(router.locale)
    },[router.locale])



    return (
        <LocaleContext.Provider value={{
            locale: currentLocale,
            locales:router.locales,
            translation,
            switchLocale,
        }}>
            {children}
        </LocaleContext.Provider>
    )
}

export default LocaleContextProvider