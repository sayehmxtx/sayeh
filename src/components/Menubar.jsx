export default function Menubar({setSelectedPage}){
    return(
        <aside className="menubar">
                <div className="menu-center">
                    <h2>منو</h2>
                    <button onClick={()=>setSelectedPage("A")}>A</button>
                    <button onClick={()=>setSelectedPage("B")}>B</button>
                    <button onClick={()=>setSelectedPage("C")}>C</button>
                    <button onClick={()=>setSelectedPage("D")}>D</button>
                </div>
        </aside>
    )
}