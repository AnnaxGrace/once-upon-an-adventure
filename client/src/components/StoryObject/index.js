import React from "react";

//comments tell the game what is going on within the story

function StoryObject(props) {
const storyObject = {
        home: {
            start: {
                p1: props.name + " poofs into a strange land. " + props.name + " looks around. There's a beautiful field and there are paths that seem to lead in different directions. To " + props.name + "'s right there seems to be a path that leads into a forest - there are a bunch of trees! There's another path to the left... but " + props.name + " can't see where it leads. Looking to the right, " + props.name + "can see a beautiful castle - it looks like it would be hard to take in battle! ",
                //beautiful woman code appearing 
                p2: "As " + props.name + " looks around suddenly - POOF. A strange but beautiful woman appears! ",
                //dialouge window of beautiful lady pops up for below dialog
                p3: " 'Hello' says the woman. 'I am here to help'. And in turn, I hope you can help us. ",
                //dialouge window of beautiful lady pops up for below dialog
                p4: " 'There is something wrong with the King. He lives in the castle. I would appreciate it if you could go see if you could help me. I do not know how this plane of existence works, so here's 10 gold. I hope that's enough!' ",
                //beautiful woman poofs away
                p5: "And then, in another POOF, she was gone! " + props.name + " looked around again and thought about what to do. ", 
            },
            enter: {
                p1: props.name + " enters where they first came into the land. " + props.name + " looks around and decides what to do. "
            }
            
        },
        forest: {
            path1: {
                start: {
                    p1: props.name +  " enters the forest. There are trees on either side of them, and in the distance, " + props.name + " can see a shop! But in the path, inbetween " + props.name + " and the shop is a person... ",
                    //this would be where a prompt says "do you go back? Or keep walking forward?"
                    //If you go forward past a certain point thief runs up to user
                    p2: "Thief Anna runs up to " + props.name + " and says ",
                    p3: "'GIMMIE YOUR MONEY!'", 
                    //prompt "okay" gives thief all money, prompt "no way"
                    p4: props.name + " says 'okay!' ",
                    //your money is zero!
                    p4: props.name + " says 'no way!' ",
                    //mini game starts
                    //if you win
                    p5: "Thief Anna says 'I can't believe you beat me... here's 10 gold, leave me alone!' ",
                    //you receive 10 gold
                    //Thief Anna goes into her corner, permanent placement
                    //if you lose
                    p6: "Thief Anna laughs in " + props.name + "'s face 'HA. You LOSE. Gimmie your money!' ",
                    //you lose 10 gold
                    //Thief Anna goes into her corner, permanent placement
                },
                enter: {
                    p1: props.name + " enters the forest. " + props.name + " notices Thief Anna watching them warily. ", 
                    //if you go talk to Thief Anna
                    p2: "Thief Anna says 'What do you want?' ",
                    //prompt "nothing" and "gimmie your money!"
                    //nothing
                    p3: props.name + " decides to leave Thief Anna alone for now. ",
                    //choose gimmie your money
                    p4: props.name + " says 'Gimmie your money!' Thief Anna looks shocked for a minute, then says, 'Bring it on!' "
                    
                },
                //if you win
                p1: "Thief Anna says 'I can't believe you beat me... here's 10 gold, leave me alone!' ",
                //you receive 10 gold
                p2: "Thief Anna laughs in " + props.name + "'s face 'HA. You LOSE. Gimmie your money!' ",
                //you lose 10 gold
                

                
            },
            path2: {
                p1: props.name + " enters the shop and looks around. It's a well-kept shop, with a lot of good items. Shopkeeper Erik looks at " + props.name + " inquisitively. 'What can I do for you?', he asks. ",
                //popup with "buy something?"
                p2: props.name + " looks around and chooses to buy a " + props.item + ". ",
                //popup with how much gold you've lost

                //If leave without buying something - we don't need it too much logic
                p3: props.name + " decides to leave the shop without buying anything. "
            }
        },
        castle: {
            path1: {
                start: {
                    p1: props.name + " follows the path to the castle. Up close it is even more marvelous. " + props.name + " notices a guard in front of the castle, glittering in the sunlight in their armor. " + props.name + " also thinks they hear a person very faintly saying '...find me...I'll give you hearts...' ",
                    p2: props.name + " decides to talk to the guard. 'Hello.' says Guard Tony. 'Do you have a permit to enter Castle Richfield?' ",
                    //prompt yes or no
                    //if yes, but don't actually have a permit
                    p3: props.name + " says 'Sure! Sure I have a permit!' and tries to smile as innocently as possible. 'LIES? LYING to ME?' Guard Tony says. He is clearly very upset. 'You clearly don't have a permit. Come back when you do!' ",
                    //if yes and has permit
                    p4: props.name + " shows Guard Tony their permit, and Guard Tony says 'Enter citizen!', and moves aside so that " + props.name + " can choose to enter the castle. ",
                    //guard moves out of the way, this is a new permanent position
                },
                enter: {
                    p1: props.name + " walks up to the castle once again. ",
                    //speaks to tony, if moved
                    p2: props.name + " decides to speak to Guard Tony. Guard Tony says 'Enjoy your visit!' ",
                    //speaks to tony, if not moved, if permit
                    p3: props.name + " decides to speak to Guard Tony. Guard Tony smiles and says 'It looks like you have a permit!', and moves aside so that" + props.name + " can choose to enter the castle. ",
                    //speaks to tony, if not moved, if no permit
                    p4: props.name + " decides to speak to Guard Tony. Guard Tony frowns and shakes his head. 'Still no permit?', he says. 'I would try the shopkeeper. He usually has some. His store is in the forest' "
                }
            },
            path2: {
                start: {
                    start: {
                        p1: props.name + " enters a grand hall. At the end of it sits the king. ",
                        //dialogue box
                        p2: "'Hello citizen', says the king. 'Can you help me? I'm not a good king if I can't type, but no one can teach me!' ",
                        //prompt with yes or no
                        //if no
                        p3: props.name + " shakes their head and says 'I can't right now'. 'Oh.' Says the king. 'That's unfortunate and awkward. Well, come talk to me if you change your mind!' ",
                        //from then on you can approach the king to take the challenge 
                        //if yes
                        p4: props.name + " says 'You bet I can!' 'Fantastic!' says the king. 'Let's start now!"
                        //typing mini-game starts
                    },
                    enter: {
                        //walk up to king
                        p1: "'Hello again!' Says the king. 'Have you come to help me?' ",
                        //prompt yes or no
                        //if no
                        p2: props.name + " shakes their head and says 'I can't right now'. 'Oh.' Says the king. 'I feel like you're playing games with my heart. Well, come talk to me if you change your mind!' ",
                        //if yes
                        p3: props.name + " gives the king a big thumbs up and says 'I have!' The king smiles at " + props.name + " and says 'Then let's get started!' ",
                        //mini game starts
                    },
                    //if lose 
                    p1: props.name + " feels ashamed that they were not able to help the king. The king signs and then says 'Well... come talk to me if you would like to try again.' ",
                    //if win
                    p2: props.name + " has helped the king. " + props.name + " feels a big sense of accomplishment, and wonders if they should revisit any old friends... "
                    
                }
            }
        },
        cliff: {
            path1: {
                start: {
                    p1: props.name + " emerges from the path and looks around. There is a cliff that looks out of a vast ocean. At the edge of the cliff is a magical looking person. " + props.name + " wonders if they should go up and talk to them... ",
                    p2: "Wizard Jace says 'Hello " + props.name + "a little birdy told me you were trying to help our kingdom! I can give you money if you play my magical math game!' ",
                    //Play game? 
                    //if yes
                    p3: props.name + " says 'Math? Money? You bet!' ",
                    //mini game starts
                    //if no
                    p3: props.name + " says, 'Not now, thanks. Maybe later!"
                },
                enter: {
                    p1: props.name + " emerges from the path and looks out at the ocean and Wizard Jace. ",
                    p2: "'Hi " + props.name + " did you want to play my math game?' ",
                    //Play game? If yes 
                    //if yes
                    p3: props.name + " says 'Math? Money? You bet!' ",
                    //mini game starts
                    //if no
                    p3: props.name + " says, 'Not now, thanks. Maybe later!"
                },
                p3: "Wizard Jace says 'Good job! Let me know if you want to play again!' "


            }
        }
    }
}

