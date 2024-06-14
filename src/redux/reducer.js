import { INCREMENT, DECREMENT, SQUARE } from "./actionTypes";

const initialState = {
    count: 0
};

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT: 
            return {
                ...state,
                count: state.count - 1
            }
        case SQUARE:
            return {
                ...state,
                count: state.count*state.count
            }
        default:
            return state;
    }
}

export default counterReducer;