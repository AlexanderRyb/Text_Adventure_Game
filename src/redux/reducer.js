const initialState = {
    textNodes: ["hello there!"],
    test: "test!"
    
}
const Reducer =(state = initialState, action)=>{
    switch(action.type){
        case "CHANGETEXT":
            console.log('f')
            return {
                state
            }
    }
}
export default Reducer;
