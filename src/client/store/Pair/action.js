import { GET_PAIRS, SET_FEE, LOADING, ERROR } from './types';


export const getPairs = () => async (dispatch) => {
	dispatch({
		type: LOADING
	});

	try {
		const response = await fetch('/api/pair')
		const data = await response.json();

		dispatch({
			type: GET_PAIRS,
			payload: data
		})
	}
	catch (error) {
		dispatch({
			type: ERROR,
			payload: error.message
		})
	}
};

export const setFee = (val) => (dispatch) => {
	dispatch({
		type: SET_FEE,
		payload: val
	});
};