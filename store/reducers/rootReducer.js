import {DISHES_DELETE, DISHES_SUCCESS} from "../actions/actionsType";

const initialState= {
    dishes:{},
    loading: false
};


export const DishesReducer = (state = initialState, action) => {

    switch (action.type) {
        case DISHES_SUCCESS:
            return {
                ...state,
                dishes:action.dishes,
                loading: false
            };
        case DISHES_DELETE:
            return {
                ...state,
                dishes:action.dishes,
            };
        default:
            return state
    }

};

export default  DishesReducer;