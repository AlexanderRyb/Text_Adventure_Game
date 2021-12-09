let textNodes = [
  "Click the button to start",
  "You are at a crossroad. Where do you want to go?",
  "The road leads to an empty house.",
  "The road leads to a lake.",
  "The road leads to a graveyard",
  "You tripped and broke your neck after falling down stairs",
  "There's nothing here",
  "You drowned. Better luck next time",
  "You have been haunted to death"  
];

const initialState = {
  currentTextNode: textNodes[0],
  colorTheme: "dark",
  showStartButton: "visible",
  showLeftButton: "hidden",
  showStraightButton: "hidden",
  showRightButton: "hidden",
  showNewgameButton: "hidden",
  showSwimButton: "hidden",
  showInvestigateButton: "hidden",
  
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIGHTTHEME": 
    return {
      ...state, 
      colorTheme: "light"
    }
    case "DARKTHEME": 
    return {
      ...state, 
      colorTheme: "dark"
    }
    case "START":
      return {
        ...state,
        currentTextNode: textNodes[1],
        showStartButton: "hidden",
        showLeftButton: "visible",
        showStraightButton: "visible",
        showRightButton: "visible",

      };
    case "NEWGAME":
      console.log(state);

      return {
        ...state,
        currentTextNode: textNodes[0],
        showStartButton: "visible",
        showLeftButton: "hidden",
        showStraightButton: "hidden",
        showRightButton: "hidden",
        showNewgameButton: "hidden",
      };
    case "GOLEFT":
      return {
        ...state,
        currentTextNode: textNodes[2],
        showStraightButton: "hidden",
        showRightButton: "hidden",
        showLeftButton: "hidden",
        showAtticButton: "visible",
      };
    case "GOSTRAIGHTAHEAD":
      return {
        ...state,
        currentTextNode: textNodes[3],
        showStraightButton: "hidden",
        showRightButton: "hidden",
        showLeftButton: "hidden",
        showSwimButton: "visible"
      };
    case "GORIGHT":
      return {
        ...state,
        currentTextNode: textNodes[4],
        showStraightButton: "hidden",
        showRightButton: "hidden",
        showLeftButton: "hidden",
        showInvestigateButton: "visible"
      };
    case "ATTIC":
      return {
        ...state,
        currentTextNode: textNodes[5],
        showAtticButton: "hidden",
        showNewgameButton: "visible",
      };
    case "KITCHEN":
      return {
        ...state,
        currentTextNode: textNodes[6],
      };
      case "SWIM":
        return {
          ...state,    
          currentTextNode: textNodes[7],
          showSwimButton: "hidden",
          showNewgameButton: "visible"
        };
      case "INVESTIGATE": 
      return {
          ...state,
           currentTextNode: textNodes[8],
           showInvestigateButton: "hidden",
           showNewgameButton: "visible"

      }  
    default:
      return state;
  }
};
export default Reducer;
