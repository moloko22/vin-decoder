import React from 'react';
import {useSelector} from "react-redux";
import VariableItem from "../VariableItem/VariableItem";
import './LastSearchVINList.css';
const LastSearchVinList = () => {
    const lastSearchList = useSelector(store => store.lastVINSearch);
    const generateLastSearchList = (arr) => {
        if(!arr) return;
        if(!arr.length){
            return <li>history is clear...</li>
        }
        arr = arr.slice(0, 5);
        return arr.map(elem => {
            return <VariableItem key={Math.random().toString(32)} elem={elem}/>
        })
    };
    return (
        <div className={'history_search'}>
            <h3>Last search list:</h3>
            <ul>
                {generateLastSearchList(lastSearchList)}
            </ul>
        </div>

    );
};

export default LastSearchVinList;