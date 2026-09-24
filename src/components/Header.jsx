import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Header(){
    const{t, i18n}= useTranslation()

    const[languageOpen, setLanguageOpen]=useState(false)

    const changeLanguage =(language) =>{
        i18n.changeLanguage(language)
        localStorage.setItem("language",language)
        setLanguageOpen(false)
    }

    return(
        <header className="header">
            <h2 dir={i18n.language === "fa"?"rtl":"ltr"}>
                {t("header.name")}
            </h2>

            <div className="header-menu">
                <span dir={i18n.language === "fa"?"rtl":"ltr"}>{t("header.home")}</span>
                <span dir={i18n.language === "fa"?"rtl":"ltr"}>{t("header.contact")}</span>

                <div className="language-box">
                    <button className="language-button" 
                    onClick={()=> setLanguageOpen(!languageOpen)}>
                        {i18n.language ==="fa"?"فارسی":"English"}
                        
                    </button>

                    {languageOpen &&(
                        <div className="language-options">

                            <button onClick={()=> changeLanguage("fa")}>
                                فارسی
                            </button>

                           <button onClick={()=> changeLanguage("en")}>
                                English
                            </button> 

                        </div>
                    )}
                </div>

            </div>

        </header>
    )
}