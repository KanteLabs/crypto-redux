import axios from 'axios';
import { VIEW_BALANCE } from './actionTypes';

export const VIEW_BALANCE = (address) => async dispatch => {
    const request = await axios.get(address);

    dispatch({
        type: VIEW_BALANCE,
        payload: request.data
    })
}