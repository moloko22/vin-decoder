import React  from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup';
import './VINForm.css';
const VinForm = (props) => {
    const formik = useFormik({
        initialValues: {
            VIN: '',
        },
        validationSchema: Yup.object().shape({
            VIN: Yup.string()
                .matches('^(?=.*[0-9])(?=.*[A-z])[0-9A-z-]{17}$', 'Incorrect field')
                .required('This field is required!'),
        }),
        onSubmit: values => {
            submitHandler(values.VIN)
            values.VIN = '';
        },
    });
    const {
        submitHandler,
    } = props;
    const onSubmit = (e) => {
        e.preventDefault();
        return formik.handleSubmit();
    };
    return (
        <form className={'VIN_form'}
              onSubmit={(e) => onSubmit(e)}>
            <label htmlFor="decode_vin">VIN:</label>
            <input id={'VIN'}
                   className={formik.errors.VIN ? 'error_input' : ''}
                   name={'VIN'}
                   type={'text'}
                   value={formik.values.VIN}
                   onChange={formik.handleChange}/>
            {
                formik.errors.VIN || formik.touched.VIN
                    ? <span className={'error_message'}>{formik.errors.VIN}</span>
                    : null

            }
            <button type={'submit'}>Find</button>
        </form>
    );
};

export default VinForm;