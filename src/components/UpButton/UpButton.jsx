import React, {useState} from 'react';
import './UpButton.css';
const UpButton = () => {
    const [show, checkForShow] = useState(false);
    window.addEventListener('scroll', function () {
        if(window.pageYOffset > 500) {
            return checkForShow(true);
        }else{
            return checkForShow(false);
        }
    });
    return (
        <button className={show ? 'go_up_button' : 'hide'}
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >Go up</button>
    );
};

export default UpButton;