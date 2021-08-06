import { BUY_BANANA } from './bananaTypes';

const initialState = {
    numOfBananas: 30
}

export const bananaReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_BANANA: return {
            numOfBananas: state.numOfBananas - 1,
        };

        default: return state;
    }
}
