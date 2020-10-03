import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getVariables} from "../../store/actions/VIN";
import {useDispatch} from "react-redux";
import './Variables.css';
import BackButton from "../../components/BackButton/BackButton";
const Variables = () => {
    const list = useSelector(store => store.variablesList);
    const dispatch = useDispatch();
    const generationVariablesList = (arr) => {
        if(!arr) return;

        return arr.map(elem => {
            if(elem.Value || elem.DataType){
                return <li key={elem.VariableId || elem.ID}><Link to={`/variables/${elem.ID}`}>{elem.Name}</Link></li>
            }
        })
    };
    useEffect(() => {
        dispatch(getVariables());
    }, []);
    return (
        <div className={'variables_page'}>
            <BackButton text={'Back to home'}/>
            <ul>
                {generationVariablesList(list)}
            </ul>
        </div>
    );
};

export default Variables;