import React, { useState } from "react"
import "./MusicBtns.css"
import { gameMusic } from "../../features/sound/index"


export default function MusicBtn(props) {
    const [music, setMusic] = useState(null)
    switch(music){
        case true:
            console.log("music",music)
            gameMusic.stop()
            gameMusic.play()
            return(<div id="musicBtn" onClick={()=>{
                setMusic(false)
            }}
            >Music <i class="fas fa-volume-up"></i>
            </div>)
        case false:
            console.log("music",music)
            gameMusic.stop()
            return(<div id="musicBtn" onClick={()=>{
                setMusic(true)
            }}
            >Music <i class="fas fa-volume-mute"></i></div>)
        default:
            return(<div id="musicBtn" onClick={()=>{
                setMusic(true)
            }}
            >Music <i class="fas fa-volume-mute"></i></div>)
    }
}