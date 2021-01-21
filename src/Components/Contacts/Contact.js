import React from 'react';

import male from './img/male.png';
import female from './img/female.png';
import neither from './img/neither.png';

import './style.css';
const Contact = (props) => {
    let gender;
    if (props.gender === 'male') {
        gender = male;
    } else if (props.gender === 'female') {
        gender = female;
    } else {
        gender = neither;
    }

    return (
        <div className="contact">
            <img alt={props.gender} src={gender} className="gender" />
            <div className="contact-info">
                <p className="name">
                    {props.firstName} {props.lastName}
                </p>
                <p>{props.phone}</p>
            </div>
        </div>
    );
}
export default Contact;
