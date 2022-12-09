import { ORDER_CATEGORIA_LIST, SET_CATEGORIA_LIST } from "../actions/actions";

const initialState = {
    categoriaList : []
}

const categoriaReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CATEGORIA_LIST : 
        return {
            ...state,
            categoriaList : action.payload
        };
        case ORDER_CATEGORIA_LIST :
            return{
                ...state,
                categoriaList : action.payload
            };
        default:
            return state;
    }
}

export default categoriaReducer;