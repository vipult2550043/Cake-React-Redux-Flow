import { BUY_CHOCO, RESET_CHOCO } from "./Chocotypes";

const initial_value = {
    noOfChoco:15
}
const reset = 15;

export const chocoReducer = (state=initial_value,action) => {
    switch (action.type) {
        case BUY_CHOCO:
            return {
                ...state,noOfChoco:state.noOfChoco-1
            }

        case RESET_CHOCO:
            return {
                ...state,noOfChoco:reset
            }
        default:{
            return state
        }
            
    }
}