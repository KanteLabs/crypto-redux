import {
    ADD_ADDRESS,
    REMOVE_ADDRESS
} from './actionTypes';

export const ADD_ADDRESS = (address) => {
    return({
        type: ADD_ADDRESS,
        payload: address
    })
}

export const REMOVE_ADDRESS = () => {
    return({
        type: REMOVE_ADDRESS,
        payload: null
    })
}