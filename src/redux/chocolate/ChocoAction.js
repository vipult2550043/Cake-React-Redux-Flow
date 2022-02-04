import { BUY_CHOCO, RESET_CHOCO } from "./Chocotypes";

export const buyChoco = () => {
    return {
        type: BUY_CHOCO
    }
}

export const resetChoco = () => {
    return {
        type: RESET_CHOCO
    }

}