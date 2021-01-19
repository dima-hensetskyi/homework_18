import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
    return (
        <div className="notFound">
            <h1>Not Found! I have spoken.</h1>
            <Route>
                <Link to="/main" className="app-link">
                    Return to the main page
                </Link>
            </Route>
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2019-12-02-at-9-54-52-am-1575298534.png" />
        </div>
    );
}

export default NotFound;
