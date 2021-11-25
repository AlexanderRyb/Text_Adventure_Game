let textNodes = [
    "Click the button to start", 
    "You are at a crossroad. Where do you want to go?"
]

const initialState = {    
    currentTextNode: textNodes[0]   
    
}
const Reducer =(state = initialState, action)=>{
    switch(action.type){
        case "START":
           
            return {
                ...state, 
                currentTextNode: textNodes[1]
                
            }
        default: 
        return state;    
    }
}
export default Reducer;
