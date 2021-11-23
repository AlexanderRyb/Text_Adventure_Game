const initialState = {
    textNode: "hello there!",
    
    
}
let test = "changed"
const Reducer =(state = initialState, action)=>{
    switch(action.type){
        case "CHANGETEXT":
           
            return {
                ...state, 
                textNode:test
                
            }
        default: 
        return state;    
    }
}
export default Reducer;
