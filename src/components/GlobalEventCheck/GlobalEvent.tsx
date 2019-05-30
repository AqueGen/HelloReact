import * as React from "react";
import GlobalEvent1 from "./GlobalEvent1";
import GlobalEvent3 from "./GlobalEvent3";
import GlobalEvent2 from "./GlobalEvent2";
import {GLOBAL_EVENT} from "../../Consts/GlobalEvent";

interface IState {
    eventValue: string
}

interface IProps {

}


class GlobalEvent extends React.Component<IProps, IState> {

    title: string = "Global event MAIN";

    constructor(props: IProps) {
        super(props);

        this.state = {
            eventValue: ""
        }
    }

    componentDidMount(): void {
        window.addEventListener(GLOBAL_EVENT, ((event: CustomEvent<string>) => {
            this.setState({
                eventValue: event.detail
            });
        }) as EventListener);
    }

    dispatchGlobalEvent(): void {
        let globalEvent = new CustomEvent(GLOBAL_EVENT, {detail: this.title});
        window.dispatchEvent(globalEvent);
    }

    render() {
        return (
            <div>
                <div>{this.title} -> {this.state.eventValue}</div>
                <div>
                    <button onClick={e => this.dispatchGlobalEvent()}>{this.title}</button>
                </div>
                <hr/>
                <div>
                    GlobalEvent_1:
                    <GlobalEvent1/>
                </div>
                <hr/>
                <div>
                    GlobalEvent_2:
                    <GlobalEvent2/>
                </div>
                <hr/>
                <div>
                    GlobalEvent_3:
                    <GlobalEvent3/>
                </div>
            </div>

        );
    }
}

export default GlobalEvent;
