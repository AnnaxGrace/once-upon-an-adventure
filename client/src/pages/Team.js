import React, { useRef, useEffect } from "react";
// import {canvas, xAxis, yAxis, srcX, srcY, width, height, context, curretFrame, selectedChar, character, animate, updateFrame, drawSprite} from "../assets/teamMovement/animate";
import useAnimation from "../assets/teamMovement/animate"

const styles = {
    sprites: {
        height: 100
    },
    devCard: {
        margin: 20
    },
    divPos: {
        margin: "auto",
        width: "90%"
    },
    teamImg: {
        width: 150,
        height: 250,
        margin: "auto"
    }
}
const teamInfo = [
    {
        id: 1,
        img: require("../images/teamAnna.png"),
        name: "Anna Conover",
        roles: "Mini Games, Story Logic, Thief",
        useAnimation: function (canvas) {
            return useAnimation("anna", canvas)
        }
    },
    {
        id: 2,
        img: require("../images/teamJace.png"),
        name: "Jace Clements",
        roles: "Front-end Appearance, Math Wizard",
       
    },
    {
        id: 3,
        img: require("../images/teamVinnie.png"),
        name: "Vinnie Lopez",
        roles: "Back-End Development, Authentication, Heart-giving Orc"
    },
    {
        id: 4,
        img: require("../images/teamTony.png"),
        name: "Tony Garces",
        roles: "Canvas grid, Castle Guard"
    },
    {
        id: 5,
        img: require("../images/teamErik.png"),
        name: "Erik Hirsch",
        roles: "Sprite Animation, Shopkeeper"
    }
]

function Team() {
    let canvas=document.querySelector('.canvas');
useEffect(()=>{
    export default function useAnimation(name,canvas) {
        console.log(name) 
            console.log(canvas)
            //Position where frame will be drawn
            let xAxis = 75;
            let yAxis = 125;
            //Position on the image to be animated
            let srcX;
            let srcY = 128;
            //Height and width of each frame of animation = 64
            const width = 64;
            const height = 64;
        
            //has animation images render as a 2d image
            const context = canvas.getContext('2d');
            // Frame that will be rendered frist (measured by the position on x-axis)
            let curretFrame = 0;
        
            let selectedChar;
        
            let character = new Image();
            //sets the speed of sprite animation
            function animate(name) {
                setInterval(function characterStart(name) {
                    selectedChar = name;
                    character.src = "../client/src/assets/sprites/" + selectedChar + ".png"
                    drawSprite();
                }, 125);
            }
        
            function updateFrame() {
                context.clearRect(xAxis, yAxis + 10, width, height);
                curretFrame = ++curretFrame % 5; //9 is the number of columns to be animated
                srcX = curretFrame * width;
            }
            //draws the sprite
            function drawSprite() {
                context.drawImage(character, srcX, srcY, width, height, xAxis, yAxis, width, height);
                updateFrame();
            }
            animate();
        }
},[])

    // const canvas = document.getElementById('canvas');

    return(
        <div style={styles.divPos}>
            <h1 className="text-center">The Team</h1>
                <div className="row">
                    {teamInfo.map(item => (
                        <div className="col-md-2 card text-center" style={styles.devCard} key={item.id}>
                            {item.useAnimation(canvas)}
                            <canvas ref= {canvas=>{
                                this.mycanvas = canvas
                            }}  className="canvas" style={styles.teamImg}></canvas>
                            
                            {/* <img src={item.img} style={styles.teamImg} alt={item.name} /> */}
                                <h5>{item.name}</h5>
                                    <p className="special">
                                        {item.roles}
                                    </p>
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default Team;