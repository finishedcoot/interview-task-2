import React, {ReactNode, createContext, useState} from "react";
import {useRouter} from "next/router";

interface LocaleContextType {
    locale?:string
    switchLocale: (locale:string) => void
}

const LocaleContext: React.FC<{ children: ReactNode }> = ({children}) => {
    const router = useRouter()
    const [currentLocale, setCurrentLocale] = useState(router.locale)

    const switchLocale = (locale:string) => {
        setCurrentLocale(locale)
    }

    const LocaleContext = createContext<LocaleContextType>({
        locale: currentLocale,
        switchLocale
    })

    return (
        <LocaleContext.Provider value={{
            locale: currentLocale,
            switchLocale
        }}>
            {children}
        </LocaleContext.Provider>
    )
}

export default LocaleContext