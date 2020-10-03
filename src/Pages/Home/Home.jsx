import React from 'react';
import VinForm from "../../components/VINForm/VINForm";
import LastSearchVinList from "../../components/LastSearchVINList/LastSearchVINList";
import ListOfVariables from "../../components/ListOfVariables/ListOfVariables";
import {useDispatch, useSelector} from "react-redux";
import {decodeVIN} from "../../store/actions/VIN";
import './Home.css';

const Home = () => {
    const requestMessage = useSelector(store => store.requestMessage);
    const dispatch = useDispatch();
    const submitHandler = (data) => {
        return dispatch(decodeVIN(data));
    };
    return (
        <section className={'home_page'}>
            <p className={'request_message'}>{requestMessage ? requestMessage : null}</p>
            <div className={'home_page_decode_vin'}>
                <VinForm submitHandler={submitHandler}/>
                <LastSearchVinList />
            </div>
            <ListOfVariables />
        </section>
    );
};

export default Home;