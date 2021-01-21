import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import React from 'react';

import Contacts, { contactsList } from './Components/Contacts/Contacts';
import ContactDescription from './Components/Contacts/ContactDescription';
import Main from './Components/Main/Main';
import Posts from './Components/Post/Posts';
import Photo from './Components/Photos/Photo';
import NotFound from './Components/NotFound/NotFound';

import './App.css';

const selectedContact = (props) => {
    const single = contactsList.find((contact) => contact.lastName === props.match.params.lastName);
    return (
        <div className="contactDescription">
            <ContactDescription {...single}></ContactDescription>
        </div>
    );
};

const App = () => 
        <div className="App">
            <Router>
                <header className="App-header">
                    <NavLink to="/main" className="app-link" activeClassName="active-link">
                        Main
                    </NavLink>
                    <NavLink to="/posts" className="app-link" activeClassName="active-link">
                        Post
                    </NavLink>
                    <NavLink to="/photo" className="app-link" activeClassName="active-link">
                        Photo
                    </NavLink>
                    <NavLink to="/contacts" className="app-link" activeClassName="active-link">
                        Contacts
                    </NavLink>
                </header>
                <Switch>
                    <Route path="/main" component={Main} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/photo" component={Photo} />
                    <Route path="/contacts/:lastName" component={selectedContact} />
                    <Route path="/contacts" component={Contacts} exact />
                    <Route path="*" component={NotFound}></Route>
                </Switch>
            </Router>
        </div>

export default App;
