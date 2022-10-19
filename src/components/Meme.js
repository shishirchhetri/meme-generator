import memedata from "../memesData"
import React from "react"
export default function Meme(){
    const [memeImg,setMemeImg] = React.useState('')
   function clicked(){
    const memeArray = memedata.data.memes
    const randomNum = Math.floor(Math.random() * memeArray.length)
    const url = memeArray[randomNum].url
    setMemeImg(url)
}
    return(
       <main>
        <div className="form">
            <input type="text" placeholder="Top-text" className="from-input"/>
            <input type="text" placeholder="Bottom-text" className="from-input"/>
            <button onClick={clicked} className="form-button">Get a new meme image 🖼</button>
        </div>
        <img className="meme-img" src={memeImg} />
       </main>
    )
    }
    

