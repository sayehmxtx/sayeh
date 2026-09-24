import { useTranslation } from "react-i18next";

export default function({setSelectedPage}){
    const{t, i18n}=useTranslation()

    return(
        <aside className="menubar" dir={i18n.language === "fa"?"rtl":"ltr"}>

            <div className="menu-center">

                <h2>{t("menu.title")}</h2>
                <button onClick={()=> setSelectedPage("A")}>{t("menu.A")}</button>
                <button onClick={()=> setSelectedPage("B")}>{t("menu.B")}</button>
                <button onClick={()=> setSelectedPage("C")}>{t("menu.C")}</button>
                <button onClick={()=> setSelectedPage("D")}>{t("menu.D")}</button>
                
            </div>

        </aside>
    )
}