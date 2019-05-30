import * as React from "react";
import '../styles/App.css';
import Welcome from "./Welcome/Welcome";
import {Header, Footer} from "./common";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Home} from "./Home";
import {GlobalEvent} from "./GlobalEventCheck";

class App extends React.Component {
    public render() {
        return (
            <div>
                <Header/>

                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/welcome">Welcome</Link>
                            </li>
                            <li>
                                <Link to="/globalEvents">GlobalEvents</Link>
                            </li>
                        </ul>

                        <hr/>

                        <Route exact path="/" component={Home}/>
                        <Route path="/welcome" component={Welcome}/>
                        <Route path="/globalEvents" component={GlobalEvent}/>
                    </div>
                </Router>
                <Footer/>
            </div>
        );
    }
}

export default App;
