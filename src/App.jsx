import { useState } from "react"
import Menubar from "./components/Menubar"

export default function App(){
  const[selectedPage, setSelectedPage]= useState(null)
  const[selectedItem, setSelectedItem]= useState(null)
  
  return(
    <div className="app">
      <main className="content">
        {selectedPage === null && (
        <div className="homepage">
          <h1>فهرست</h1>

          <div className="cards">
            <div className="card">aa</div>
            <div className="card">aaa</div>
            <div className="card">bb</div>
            <div className="card">bbb</div>
            <div className="card">cc</div>
            <div className="card">ccc</div>
            <div className="card">dd</div>
            <div className="card">ddd</div>
          </div>
        </div> )}
        {selectedPage === "A" && (
          <div>
          <h1>page A</h1>
          <div className="items">
            <button onClick={()=> setSelectedItem("aa")}>aa</button>
            <button onClick={()=> setSelectedItem("aaa")}>aaa</button>
          </div>
          {selectedItem === "aa"&& (<h2>aa</h2>)}
          {selectedItem === "aaa"&& (<h2>aaa</h2>)}
          </div> )}

        {selectedPage === "B" && (
          <div>
          <h1>page B</h1>
          <div className="items">
            <button onClick={()=> setSelectedItem("bb")}>bb</button>
            <button onClick={()=> setSelectedItem("bbb")}>bbb</button>
          </div>
          {selectedItem === "bb"&& (<h2>bb</h2>)}
          {selectedItem === "bbb"&& (<h2>bbb</h2>)}
          </div>)}

       {selectedPage === "C" && (
          <div>
          <h1>page C</h1>
          <div className="items">
            <button onClick={()=> setSelectedItem("cc")}>cc</button>
            <button onClick={()=> setSelectedItem("ccc")}>ccc</button>
          </div>
          {selectedItem === "cc"&& (<h2>cc</h2>)}
          {selectedItem === "ccc"&& (<h2>ccc</h2>)}
          </div> )}

        {selectedPage === "D" && (
          <div>
          <h1>page D</h1>
          <div className="items">
            <button onClick={()=> setSelectedItem("dd")}>dd</button>
            <button onClick={()=> setSelectedItem("ddd")}>ddd</button>
          </div>
          {selectedItem === "dd"&& (<h2>dd</h2>)}
          {selectedItem === "ddd"&& (<h2>ddd</h2>)}
          </div>)}

      </main>

      <Menubar setSelectedPage={setSelectedPage}/>
      
    </div>

  )
}