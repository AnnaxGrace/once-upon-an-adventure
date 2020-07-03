import React, { useEffect } from "react";
// import {canvas, xAxis, yAxis, srcX, srcY, width, height, context, curretFrame, selectedChar, character, animate, updateFrame, drawSprite} from "../assets/teamMovement/animate";
// import useAnimation from "../assets/teamMovement/animate"
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
let context;
// Frame that will be rendered frist (measured by the position on x-axis)
let curretFrame = 0;
let selectedChar;
let character = new Image();
//sets the speed of sprite animation
function animate(name) {
    console.log(name)
    setInterval(function characterStart() {
        // selectedChar = name;
        character.src = require("../assets/sprites/"+name+".png")
        console.log(character.src)
        console.log("HEYYYY!")
        drawSprite();
    }, 125);
}
function updateFrame() {
    console.log("updating frame")
    context.clearRect(xAxis, yAxis + 10, width, height);
    curretFrame = ++curretFrame % 5; //# is the number of columns to be animated
    srcX = curretFrame * width;
}
//draws the sprite
function drawSprite() {
    console.log("drawing Image")
    context.drawImage(character, srcX, srcY, width, height, xAxis, yAxis, width, height);
    updateFrame();
}
const teamInfo = [
    {
        id: 1,
        img: "anna",
        name: "Anna Conover",
        roles: "Mini Games, Story Logic, Thief",
        
        useAnimation: function () {
            return animate("anna")
        }
    },
    {
        id: 2,
        img: "jace",
        name: "Jace Clements",
        roles: "Front-end Appearance, Math Wizard",
        useAnimation: function () {
            return animate("jace")
        }
    },
    {
        id: 3,
        img: "vinnie",
        name: "Vinnie Lopez",
        roles: "Back-End Development, Authentication, Heart-giving Orc",
        useAnimation: function () {
            return animate("vinnie")
        }
    },
    {
        id: 4,
        img: "tony",
        name: "Tony Garces",
        roles: "Canvas grid, Castle Guard",
        useAnimation: function () {
            return animate("tony")
        }
    },
    {
        id: 5,
        img: "erik",
        name: "Erik Hirsch",
        roles: "Sprite Animation, Shopkeeper",
        useAnimation: function () {
            return animate("erik")
        }
    }
]
function Team() {
useEffect(()=>{
 let canvas= document.querySelector('.canvas')
context=canvas.getContext('2d');
console.log(context)
},[])
    const canvas = document.getElementById('canvas');
    return(
        <div style={styles.divPos}>
            <h1 className="text-center">The Team</h1>
                <div className="row">
                    {teamInfo.map(item => (
                        <div className="col-md-2 card text-center" style={styles.devCard} key={item.id}>
                            <canvas className="canvas" style={styles.teamImg}></canvas>
                            {item.useAnimation()}
                            {/* <img src={require("../assets/sprites/tony.png")} style={styles.teamImg} alt={item.name} /> */}
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