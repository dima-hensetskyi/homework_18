import React from 'react';
import './ContactDescription.css';
import { Link } from 'react-router-dom';

function ContactDescription({ lastName, firstName, phone, image, characteristic }) {
    return (
        <div className="card">
            <div className="photo">
                <img src={image} />
            </div>
            <div className="information">
                <p className="name">
                    {firstName} {lastName}
                </p>
                <p>{phone}</p>
                <p className="characteristic">{characteristic}</p>
            </div>
            <Link to="/contacts" className="app-link">
                Back
            </Link>
        </div>
    );
}

export default ContactDescription;
