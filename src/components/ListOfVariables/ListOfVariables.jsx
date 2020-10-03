import React from 'react';
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import {ROUTES} from "../../helpers/routes";
import './ListOfVariables.css';
const ListOfVariables = () => {
    const list = useSelector(store => store.variablesList);
    const generateList = (arr) => {
        if(!arr || !arr.length) return;
        return arr.map(elem => {
            if(elem.Value){
                return <li key={elem.VariableId}><Link to={ROUTES.VARIABLE + elem.VariableId}>{elem.Variable} - {elem.Value}</Link></li>
            }

        })
    };
    return (
        <div className={'list_variables'}>
            <h3>List of Variables:</h3>
            {
                list && list.length !== 0
                    ? <ul>{generateList(list)}</ul>
                    : null
            }
        </div>
    );
};

export default ListOfVariables;