import { GET_PAIRS, SET_FEE, LOADING, ERROR } from './types';

const INITIAL_STATE = {
    pairs: [],
    fee: 0.5,
    loading: false,
    error: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_PAIRS:
            return{
                ...state,
                pairs: action.payload.body,
                loading: false,
                error: null
            }
        case SET_FEE:
            return{
                ...state,
                fee: parseFloat(action.payload),
                loading: false,
                error: null
            }
        case LOADING:
            return{
                ...state,
                loading: true,
                error: null
            }
        case ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}