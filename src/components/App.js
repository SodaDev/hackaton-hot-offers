import React, {Component} from "react";
import {Header} from './header/Header';
import {Footer} from './footer/Footer';
import {Main} from './main/Main';

class App extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <article className="ho_card">
                    <Header className="Header" />
                    <Main className="Main" />
                    <Footer className="Footer" />
                </article>
            </div>
        );
    }
}

export default App;
