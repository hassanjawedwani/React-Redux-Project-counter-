import { INCREMENT, DECREMENT, SQUARE } from "./actionTypes";

export const increment = () => {
    return {
        type: INCREMENT
    };
};

export const decrement = () => {
    return {
        type: DECREMENT
    };
};

export const square = () => {
    return {
        type: SQUARE
    };
};