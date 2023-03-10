import GameDisplay from "../GameDisplay"
import Logo from "./Logo"
import ButtonMain from "./ButtonMain"

import { useState, useEffect } from "react";


const GameEndDisplay = ({setIsStart, logoSrc, isWin})=>{    

    const [gif, setGif]=useState('')

    const fetchApi = async (URL) =>{
        const response = await fetch(URL)
        const data = await response.json()
        
        setGif(data.data[0].images.downsized.url)
    }

    const giveURL = ()=>{
    
        if (isWin) {
            const GIF_URL = 'https://api.giphy.com/v1/gifs/search?api_key=2lpN3p8FFUb2OLiH7iq7dDK9qpPyVj92&q=you+win&limit=3&offset=1&rating=g&lang=en'
            return GIF_URL
        }
        else{
            const GIF_URL = 'https://api.giphy.com/v1/gifs/search?api_key=2lpN3p8FFUb2OLiH7iq7dDK9qpPyVj92&q=you+lose&limit=3&offset=1&rating=g&lang=en'
            return GIF_URL
        }
    
       }

    useEffect(()=>{
        fetchApi(giveURL())
    }
    ,[])

    return (
        <GameDisplay > 
            <Logo src={logoSrc}/> 
            {gif && 
            <div className="mx-auto max-w-screen-sm">
                <img src={gif} alt={`an image of ${gif}`} className="w-full"/>
            </div>
            }
            <ButtonMain text="Restart" setIsStart={setIsStart}/>
        </GameDisplay>
    )
}

export default GameEndDisplay;