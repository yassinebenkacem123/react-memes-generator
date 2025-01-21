import Meme from "./Meme";
import { useState,useEffect } from "react";
export default function MainSection()
{
    let [arrayOfMemes,setArrayOfMemes] = useState([]);
    let [meme, setMeme] = useState({
        topText :"Work harder",
        bottomText:"And stay in focus",
        image:"../../src/assets/10028810.jpg",
    });
    useEffect(()=>{
        fetch("http://api.imgflip.com/get_memes")
        .then(resp=>resp.json())
        .then(data=>setArrayOfMemes(data.data.memes));
    },[]);
    function getMeme(event)
    {
        event.preventDefault();
        const index = Math.floor(Math.random()*arrayOfMemes.length);
        const newMemeUrl = arrayOfMemes[index].url;
        console.log(newMemeUrl)
        setMeme(prevMeme=>({
            ...prevMeme,
            image:newMemeUrl,
        }));
    }
    console.log(meme);
    function handlesetInputsValue(event)
    {
        let {value, name} = event.currentTarget; // event.currentTarget object, {value, name....}.
        setMeme((prevMeme)=>{
            return{
                ...prevMeme,
                [name]:value,
            }
        });
    }
    
    return(
        <div className="container">
            <form>
                <div className="inputs">
                    <label>
                        <p>Top Text</p>
                        <input 
                        onChange={handlesetInputsValue} 
                        type="text" 
                        placeholder="Meme Top Text"
                        name="topText"
                        />
                    </label>
                    <label>
                        <p>Bottom Text</p>
                        <input type="text" 
                        onChange={handlesetInputsValue} 
                        placeholder="Meme Bottom Text" 
                        name="bottomText"
                        />
                    </label>
                </div>
                <button onClick={getMeme}>Get a new meme image🖼️</button>
            </form>
            <Meme memeData = {meme} />
        </div>
    );
}