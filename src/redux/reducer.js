let textNodes = [
    "Click the button to start", 
    "You are at a crossroad. Where do you want to go?",
    "The road leads to an empty house.",
    "The road leads to a lake.",
    "The road leads to a graveyard",
    "You tripped and broke your neck after falling down stairs"
]

const initialState = {    
    currentTextNode: textNodes[0],
    showStartButton: "visible",
    showLeftButton: "hidden",
    showStraightButton: "hidden",
    showRightButton: "hidden",
    showNewgameButton: "hidden"

    
}
const Reducer =(state = initialState, action)=>{
    switch(action.type){
        case "START":
           
            return {
                ...state, 
                currentTextNode: textNodes[1],
                showStartButton: "hidden",
                showLeftButton: "visible",
                showStraightButton: "visible",
                showRightButton: "visible",

                
            }
         case "NEWGAME":
            console.log(state)

             return {
                ...state, 
                currentTextNode: textNodes[0],
                showStartButton: "visible",
                showLeftButton: "hidden",
                showStraightButton: "hidden",
                showRightButton: "hidden",
                showNewgameButton: "hidden"
            
                
                

             }   
        case "GOLEFT":
            return {
                ...state, 
                currentTextNode: textNodes[2],
                 showStraightButton: "hidden",
                showRightButton: "hidden",
                showLeftButton: "hidden",
                showAtticButton: "visible"



            }
        case "GOSTRAIGHTAHEAD":
            return {
                ...state, 
                currentTextNode: textNodes[3], 
                showStraightButton: "hidden",
                showRightButton: "hidden",
                showLeftButton: "hidden"

            } 
        case "GORIGHT":
            return {
                ...state, 
                currentTextNode: textNodes[4],
                showStraightButton: "hidden",
                showRightButton: "hidden",
                showLeftButton: "hidden"
            }
        case "ATTIC":
            console.log(state)

            return {
                ...state,
                currentTextNode: textNodes[5],
                showAtticButton: "hidden",
                showNewgameButton: "visible"
                
            }    
        default: 
        return state;    
    }
}
export default Reducer;
