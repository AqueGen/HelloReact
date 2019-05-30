import * as React from "react";
import {GLOBAL_EVENT} from "../../Consts/GlobalEvent";

interface IState {
    eventValue: string
}

interface IProps {

}


class GlobalEvent2 extends React.Component<IProps, IState> {

    title: string = "Global event 2";

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
            </div>
        );
    }
}

export default GlobalEvent2;
