import {VINApi} from "../../api/VINApi";

export const decodeVIN = (VIN, format= VINApi.FORMAT_JSON) => dispatch => {
    return fetch(VINApi.MAIN_URL + VINApi.DECODE_VIN + VIN + format)
        .then(res => res.json())
        .then(data => dispatch({type: 'DECODE_VIN', payload: {VIN, result: data}}));
};

export const getVariables = (format = VINApi.FORMAT_JSON) => dispatch => {
    return fetch(VINApi.MAIN_URL + VINApi.VARIABLES_LIST + format)
        .then(res => res.json())
        .then(data => dispatch({type: 'GET_VARIABLES_LIST', payload: data}))
};

export const getVariablesItem = (name, format = VINApi.FORMAT_JSON)  => dispatch => {
    return fetch(VINApi.MAIN_URL + VINApi.VARIABLES_LIST + name + format)
        .then(res => res.json())
        .then(data => dispatch({type: 'GET_VARIABLE_ITEM', payload: data}))
};

export const getVariablesItemById = (id, format = VINApi.FORMAT_JSON)  => dispatch => {
    return fetch(VINApi.MAIN_URL + VINApi.VARIABLE + id + format)
        .then(res => res.json())
        .then(data => dispatch({type: 'GET_VARIABLE_ITEM', payload: data}))
};