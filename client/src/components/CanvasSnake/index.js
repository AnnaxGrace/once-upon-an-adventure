import React from "react";

class CanvasSnake extends React.Component {

 

    componentDidMount() {
        var xv = 0;
        var yv = 0;
        var px = 12;
        var py = 10;
        var gs = 20;
        var tc = 20;
        var ax = 15;
        var ay = 15;

        var trail = [];
        var tail = 5;
        var run = "Start";

        let canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        
        // if ( run === "start") {
            document.addEventListener("keydown", keyPush);
            // setInterval(game, 1000/15);
             setInterval(game, 2000/15);
        // }
        // if ( run === win)
    

    function game () {
            px += xv;
            py += yv;
            //so snake px starts at 10, 15

            //food starts at 15,15
            if (px < 0 ) {
                console.log("hi")
                
                window.location.reload()
                clearInterval();
            }
            if (px > 24) {
               
               console.log("bye")
               window.location.reload()
            //    window.location.reload()
            }
            if (py < 0 ) {
                
                window.location.reload()
                
            }
            if (py > tc - 1) {
                
                window.location.reload()
            //    
            }
            // ctx.fillStyle="black";
            // ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.clearRect(0, 0, 1000, 1000)

            ctx.fillStyle="pink";
            for (var i=0; i < trail.length; i++) {
                ctx.fillRect(trail[i].x*gs, trail[i].y*gs, gs-2, gs-2);
                // ctx.fillRect(trail[i].x, trail[i].y, gs-2, gs-2);

                // if you touch your own tail
                if(trail[i].x === px && trail[i].y === py) {
                    // console.log("you lose")
                    // window.location.reload();
                }

            //     if(px === 700) {
            //         console.log("you lose")
            //         // window.location.reload();
            //         clearInterval()
            //     }

            //     if(px === 0) {
            //         console.log("you lose")
            //         // window.location.reload();
            //         clearInterval()
            //     }

            //     if (py === 382) {
            //         console.log("you lose")
            //         clearInterval()
            //     }

            //     if (py === 0) {
            //         console.log("you lose")
            //         clearInterval()
            //     }
            }

            trail.push({x: px, y: py});

            while (trail.length > tail) {
                trail.shift();
                
            }

            //this is if you touch the right math answer
            if(ax*gs === px*gs && ay*gs === py*gs) {
                console.log("hi")
                ax=Math.floor(Math.random() * tc);
                ay=Math.floor(Math.random() * tc);
                // ctx.fillStyle ="red";
                // ctx.fillRect(ax=gs, ay*gs, gs-2, gs-2);
                // ctx.fillRect(ax, ay, gs-2, gs-2);

            }

            
            ctx.fillStyle ="red";
            ctx.font="30px arial";
            // ctx.fillRect(ax = gs, ay * gs, gs-2, gs-2);
            ctx.fillText("2", ax*gs, (ay * gs) + 20 )
            // ctx.fillText("2", ax*gs, (ay * gs) + 20 )
        //     wx
        //    answer if 

        //     num1 + num2 = answer
            
            // ctx.fillRect(ax*gs, ay*gs, gs-2, gs-2);
        }

    function keyPush(event) {
        switch(event.keyCode) {
            case 37:
                xv = -1;
                yv = 0;
                break;
            case 38:
                xv = 0;
                yv = -1;
                break;
            case 39:
                xv = 1;
                yv = 0;
                break;
            case 40:
                xv = 0;
                yv = 1;
                break;
            
        }
        event.preventDefault();

    }
}

//         let x = 250
//         let y = 200
//         let width = 20
//         let height = 20
//         let gs = 20
//         let direction = "right";
//         var dx;
//         var dy;
        
//         ctx.tabIndex = 0;

//         let snake = [
//             {x: 252, y: 200},
//             {x: 242, y: 200},
//             {x: 232, y: 200},
//             {x: 222, y: 200},
//         ];

//         // var table = drawRect(10, 100, width, height)
//         // drawRect(252, 200, width, height);

//         function drawRect() {
//             snake.forEach(drawEachRect)
//         }

//         function drawEachRect(rect) {
//             ctx.fillStyle = "pink"
//             // console.log(dx);
//             // console.log("this is rect.x + dx")
//             // // console.log(rect.x + dx)
//             // // rect.x = rect.x + dx;
//             // rect.y += dy;
//             ctx.fillRect(rect.x, rect.y, width, height)
//             // ctx.fillRect(rect.x, rect.y, width, height)

//         }


//         function moveSnake() {
//             const head = {x: snake[0].x + dx, y: snake[0].y + dy};
//             snake.unshift(head);
//             snake.pop();
//         }


//         // function drawTail() {
//         //     ctx.fillStyle= "pink"
//         //     for (var i =0; i < trail.length; i++) {
//         //         console.log("hi")
//         //         console.log(trail[i].tx)
//         //         // ctx.fillRect(240, 190, width, height)
//         //         // trail[i].tx += 2

//         //         ctx.fillRect(trail[i].tx += 2, trail[i].ty, width, height)
//         //         // ctx.fillRect(trail[i].tx +10 , trail[i].ty +10, width, height)
//         //         if(trail[i].tx === x && trail[i].ty === y) {
//         //             direction ="stop"
//         //         }
//         //     }
           
//         // }
//         function updateFrame() {
//             ctx.clearRect(0, 0, 1000, 1000)
//             drawRect();
//             // moveSnake();
//             // drawRect(x, y, width, height)
//             // drawTail()
//             // drawRect(x-10, y, width, height)
//         }

//         var game = setInterval(snakeStart, 100)

// //Need to make if new direction move(snake), else run
//         function snakeStart() {
//             switch (direction) {
//                 case "right":
//                     x += 2;
//                     snake.forEach(snake => {snake.x += 2})
//                     moveSnake()
//                     dx = +2
//                     if (x === 482) {
//                         console.log("lose")
//                         direction = "stop"
//                         break;
//                     }
//                     updateFrame();
//                     break;
//                 case "left":
//                     x -= 2;
//                     dx = -2;
//                     snake.forEach(snake => {snake.x -= 2})
//                     if (x === 0) {
//                         console.log("lose")
//                         direction = "stop"
//                         break;
//                     }
//                     updateFrame();
//                     break;
//                 case "up":
//                     y -= 2;
//                     dy = -2;
//                     const head = {x: snake[0].x, y: snake[0].y -=2};
//                     snake.unshift(head);
//                     snake.pop();
//                     // const head = {x: snake[0].x, y: snake[0].y -=2};
//                     if (y === 0) {
//                         console.log("lose")
//                         direction = "stop"
//                     }
//                     updateFrame();
//                     break;
//                 case "down":
//                     y += 2;
//                     dy = +2;
//                     if (y === 382) {
//                         console.log("lose")
//                         direction = "stop"
//                     }
//                     updateFrame();
//                     break;
//                 case "stop":
//                     clearInterval(game)
//                     console.log("party");
//                     break;
//             }
//             if (direction === "stop"){
//                 clearInterval(game)
//                 console.log('goes here?')
//             }
//             // updateFrame();
//         }

//         //comment to push
//         window.addEventListener("keydown", function(event) {
//             switch (event.keyCode) {
//                 case 37 || 65:   //left arrow
//                     direction = "left"
//                     break;
//                 case 38 || 87:   //up arrow
//                     direction = "up"
//                     break;
//                 case 39 || 68:   //right arrow
//                     direction = "right"
//                     break;
//                 case 40 || 83:    //down arrow
//                     direction = "down"
//                     break;
//                 default:
//                     return;
//             }
//             //stops the arrow keys from making the page scroll
//             event.preventDefault();
//             // ctx.clearRect(0, 0, 500, 500)
//             // drawRect(x, y, width, height)
//             // drawRect((x+2), y+2, width, height)
//         }, false);
//         // window.addEventListener('keydown', SnakeDirection)
    

    

    render() {
        return(
          <div>
            <canvas ref="canvas" width={500} height={400} />
            {/* <img ref="image" src={cheese} className="hidden" /> */}
          </div>
        )
      }
    }
    export default CanvasSnake