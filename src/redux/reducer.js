let textNodes = ["hello there!", "changed"]

const initialState = {
    
    currentTextNode: textNodes[0]
    
    
}
const Reducer =(state = initialState, action)=>{
    switch(action.type){
        case "CHANGETEXT":
           
            return {
                ...state, 
                currentTextNode: textNodes[1]
                
            }
        default: 
        return state;    
    }
}
export default Reducer;
