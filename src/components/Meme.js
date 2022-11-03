// Data for the meme image is fetched using 
// an api "https://api.imgflip.com/get_memes"
// replacing the memesData.js file

import React from "react"
export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImg: "https://i.imgflip.com/30b1gx.jpg"
    })
    const [allMemeImg, setAllMemeImg] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImg(data.data.memes))
        {/*
        useEffect takes a function as its parameter. If that function
        returns something, it needs to be a cleanup function. Otherwise,
        it should return nothing. If we make it an async function, it
        automatically retuns a promise instead of a function or nothing.
        Therefore, if you want to use async operations inside of useEffect,
        you need to define the function separately inside of the callback
        function, as seen below:
    async function getmemes(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    */}
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImg.length)
        const url = allMemeImg[randomNumber].url
        setMeme(preValue => {
            return ({
                ...preValue,
                randomImg: url
            })
        })

    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(preValue => {
            return ({
                ...preValue,
                [name]: value
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
                <img src={meme.randomImg} className="meme--image" alt="memeImg" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}


