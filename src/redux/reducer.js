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
    showRightButton: "hidden"

    
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
             return {
                 ...state,
                 currentTextNode: [0],
                 
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
            } 
        case "GORIGHT":
            return {
                ...state, 
                currentTextNode: textNodes[4]
            }
        case "ATTIC":
            return {
                ...state,
                currentTextNode: textNodes[5],
                showAtticButton: "hidden",
                
            }    
        default: 
        return state;    
    }
}
export default Reducer;
