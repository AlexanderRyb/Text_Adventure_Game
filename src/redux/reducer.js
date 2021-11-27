let textNodes = [
    "Click the button to start", 
    "You are at a crossroad. Where do you want to go?",
    "The road leads to am empty house.",
    "The road leads to a lake.",
    "The road leads to a graveyard"
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
        case "GOLEFT":
            return {
                ...state, 
                currentTextNode: textNodes[2]

            }
        case "GOSTRAIGHTAHEAD":
            return {
                ...state, 
                currentTextNode: textNodes[3]
            } 
        case "GORIGHT":
            return {
                ...state, 
                currentTextNode: textNodes[4]
            }
        default: 
        return state;    
    }
}
export default Reducer;
