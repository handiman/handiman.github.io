import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Profile, Usp } from './pages';
import { Navigation, Footer, ModalContactForm } from './components';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { showModalContactForm: false };
        this.onShowModalContactFormChanged = this.onShowModalContactFormChanged.bind(this);
    }

    onShowModalContactFormChanged(showModalContactForm) {
        this.setState({ showModalContactForm });
    }

    render() {
        return (
            <Router>
                <Navigation onShowModalContactFormChanged={this.onShowModalContactFormChanged} />
                <Switch>
                    <Route exact path="/">
                        <Home onShowModalContactFormChanged={this.onShowModalContactFormChanged} />
                    </Route>
                    <Route exact path="/cv">
                        <Profile />
                    </Route>
                </Switch>
                <ModalContactForm showModalContactForm={this.state.showModalContactForm} onShowModalContactFormChanged={this.onShowModalContactFormChanged} />
                <Footer />
            </Router>
        )
    }
}