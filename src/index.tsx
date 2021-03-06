import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {rootReducer} from "./store/reducers";

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById("root"));
