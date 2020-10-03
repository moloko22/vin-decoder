import React from 'react';
import {useDispatch} from "react-redux";
import {decodeVIN} from "../../store/actions/VIN";

const VariableItem = (props) => {
    const dispatch = useDispatch();
    const {
        elem
    } = props;
    const onClickHandler = () => {
        return dispatch(decodeVIN(elem.VIN));
    };
    return (
        <li onClick={() => onClickHandler()}>{elem.VIN}</li>
    );
};

export default VariableItem;