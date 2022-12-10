import { SET_ORDER_LIST } from "../actions/actions";

const initialeState = {
    orderList : []
}

const orderReducer = (state = initialeState, action) => {
    switch(action.type) {
        case SET_ORDER_LIST : 
        return {
            ...state,
            orderList : [...state.orderList, action.payload]
        };
        default:
            return state;
    }
}

export default orderReducer;