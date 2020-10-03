import React, {useEffect} from 'react';
import {history} from "../../helpers/history";
import {useDispatch, useSelector} from "react-redux";
import {getVariablesItemById} from "../../store/actions/VIN";
import './VariableItem.css';
import BackButton from "../../components/BackButton/BackButton";
const VariableItem = () => {
    const dispatch = useDispatch();
    const id = history.location.pathname.split('/').pop();
    const list = useSelector(store => store.variableItem);
    const requestMessage = useSelector(store => store.requestMessage);
    const generateListOfItems = (arr) => {
        if(!arr) return;
        if(!arr.length) {
            return <li key={'not found'}>Not found...try next time</li>
        }
        return arr.map(elem => {
            return <li key={elem.Name}>{elem.Name}</li>
        })
    };
    useEffect(() => {
        dispatch(getVariablesItemById(id));
    }, []);
    return (
        <div className={'variable_item'}>
            <ul>
                {
                    list
                        ?<BackButton text={'Go back'} />
                        : null
                }
                <p>{requestMessage}:</p>
                {generateListOfItems(list)}
            </ul>

        </div>
    );
};

export default VariableItem;