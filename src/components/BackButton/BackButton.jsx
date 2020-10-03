import React from 'react';
import {history} from "../../helpers/history";
import './BackButton.css';
const BackButton = (props) => {
    const {
        text,
    } = props;
    return (
        <button className={'back_button'} onClick={(e) => history.goBack()}>{text}</button>
    );
};

export default BackButton;