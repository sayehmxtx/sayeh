import { useState } from "react"

export default function Menubar({setSelectedPage}){
    const [isOpen,setIsOpen]= useState(true)

    return(
        <aside className={`menubar ${isOpen? "open": "close"}`}>
            <button className="toggle-button"
                    onClick={()=> setIsOpen(!isOpen)}>
                    ☰
            </button>

            {isOpen && (
                <div className="menu-center">
                    <h2>منو</h2>
                    <button onClick={()=>setSelectedPage("A")}>A</button>
                    <button onClick={()=>setSelectedPage("B")}>B</button>
                    <button onClick={()=>setSelectedPage("C")}>C</button>
                    <button onClick={()=>setSelectedPage("D")}>D</button>
                </div>
            )}
        </aside>
    )
}