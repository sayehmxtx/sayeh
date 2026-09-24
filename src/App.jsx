import { useState } from "react"
import { useTranslation } from "react-i18next"

import Menubar from "./components/Menubar"
import Header from "./components/Header"

export default function App(){
  const [selectedPage, setSelectedPage] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)

  const { t,i18n } = useTranslation()
  
  return(
    <div className="app">
      
      <Header/>

      <main className="content">

        {selectedPage === null && (
          <div className="homepage">

            <h1 dir={i18n.language === "fa"?"rtl":"ltr"}>{t("pages.index")}</h1>

            <div className="cards">
              <div className="card">{t("items.aa")}</div>
              <div className="card">{t("items.aaa")}</div>
              <div className="card">{t("items.bb")}</div>
              <div className="card">{t("items.bbb")}</div>
              <div className="card">{t("items.cc")}</div>
              <div className="card">{t("items.ccc")}</div>
              <div className="card">{t("items.dd")}</div>
              <div className="card">{t("items.ddd")}</div>
            </div>

          </div>
        )}

        {selectedPage === "A" && (
          <div>
            <h1>{t("pages.A")}</h1>

            <div className="items">
              <button onClick={() => setSelectedItem("aa")}>
                {t("items.aa")}
              </button>

              <button onClick={() => setSelectedItem("aaa")}>
                {t("items.aaa")}
              </button>
            </div>

            {selectedItem === "aa" && (
              <h2>{t("items.aa")}</h2>
            )}

            {selectedItem === "aaa" && (
              <h2>{t("items.aaa")}</h2>
            )}
          </div>
        )}

        {selectedPage === "B" && (
          <div>
            <h1>{t("pages.B")}</h1>

            <div className="items">
              <button onClick={() => setSelectedItem("bb")}>
                {t("items.bb")}
              </button>

              <button onClick={() => setSelectedItem("bbb")}>
                {t("items.bbb")}
              </button>
            </div>

            {selectedItem === "bb" && (
              <h2>{t("items.bb")}</h2>
            )}

            {selectedItem === "bbb" && (
              <h2>{t("items.bbb")}</h2>
            )}
          </div>
        )}

        {selectedPage === "C" && (
          <div>
            <h1>{t("pages.C")}</h1>

            <div className="items">
              <button onClick={() => setSelectedItem("cc")}>
                {t("items.cc")}
              </button>

              <button onClick={() => setSelectedItem("ccc")}>
                {t("items.ccc")}
              </button>
            </div>

            {selectedItem === "cc" && (
              <h2>{t("items.cc")}</h2>
            )}

            {selectedItem === "ccc" && (
              <h2>{t("items.ccc")}</h2>
            )}
          </div>
        )}

        {selectedPage === "D" && (
          <div>
            <h1>{t("pages.D")}</h1>

            <div className="items">
              <button onClick={() => setSelectedItem("dd")}>
                {t("items.dd")}
              </button>

              <button onClick={() => setSelectedItem("ddd")}>
                {t("items.ddd")}
              </button>
            </div>

            {selectedItem === "dd" && (
              <h2>{t("items.dd")}</h2>
            )}

            {selectedItem === "ddd" && (
              <h2>{t("items.ddd")}</h2>
            )}
          </div>
        )}

      </main>

      <Menubar setSelectedPage={setSelectedPage}/>

    </div>
  )
}