import React from "react";

function StoryObject(props) {
    const storyObject = {
        home: {
            start: {
                p1: props.name + " poofs into a strange land. " + props.name + " looks around. There's a beautiful field and there are paths that seem to lead in different directions. To " + props.name + " right there seems to be a path that leads into a forest - there are a bunch of trees! There's another path to the left... but " + props.name + " can't see where it leads. Looking to the right, " + props.name + "can see a beautiful castle - it looks like it would be hard to take in battle! ",
                p2: "As " + props.name + " looks around suddenly - POOF. A strange but beautiful woman appears! ",
                p3: " 'Hello' says the woman. 'I am here to help'. And in turn, I hope you can help us. ",
                p4: " 'There is something wrong with the King. He lives in the castle. I would appreciate it if you could go see if you could help me. I do not know how this plane of existence works, so here's 10 gold. I hope that's enough!' ",
                p5: "And then, in another POOF, she was gone! " + props.name + " looked around again and thought about what to do. ", 
            },
            enter: {
                p1: props.name + " enters where they first came into the land. " + props.name + " looks around and decides what to do. "
            }
            
        },
        forest: {
            path1: {
                start: {
                    p1: props.name +  "enters"  
                }
                
            }
        },
        castle: {
            path1: {
                p1: "She entered"
            }
        },
        cliff: {
            path1: {

            }
        }
    }
}