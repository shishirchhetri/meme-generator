import memesData from "../memesData"
import React from "react"
export default function Meme(){
    const [meme,setMeme]=React.useState({
        topText:'',
        bottomText:'',
        randomImg:"https://i.imgflip.com/30b1gx.jpg"
    })
    const [allMemeImg,setAllMemeImg]=React.useState(memesData)

    function getMemeImage(){
        const memeArray = allMemeImg.data.memes
        const randomNumber = Math.floor(Math.random()*memeArray.length)
        const url = memeArray[randomNumber].url
        setMeme(preValue=>{
            return({
                ...preValue,
                randomImg:url
            })
        })
        
    }

    function handleChange(event){
        const{name,value}=event.target
        setMeme(preValue=>{
            return({
                ...preValue,
                [name]:value
            })
        })
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top-text" 
                    className="from-input"
                    name="topText"
                    onChange={handleChange}
                 />
                <input 
                    type="text" 
                    placeholder="Bottom-text" 
                    className="from-input"
                    name="bottomText"
                    onChange={handleChange}
                />
                <button onClick={getMemeImage} className="form-button">Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImg} className="meme--image" alt="meme image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            </main>
    )
}


