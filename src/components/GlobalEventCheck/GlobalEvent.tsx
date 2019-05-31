import * as React from "react";
import GlobalEvent1 from "./GlobalEvent1";
import GlobalEvent3 from "./GlobalEvent3";
import GlobalEvent2 from "./GlobalEvent2";
import {GLOBAL_EVENT} from "../../Consts/GlobalEvent";

interface IState {
    value: string
}

interface IProps {

}


class GlobalEvent extends React.Component<IProps, IState> {

    title: string = "Global event MAIN";

    constructor(props: IProps) {
        super(props);

        this.state = {
            value: this.title
        }
    }

    changeGlobalEvent(): void {
        this.setState({
            value: this.title
        })
    }

    onChangeGlobalEvent(value: string): void {
        this.setState({
            value: value
        })
    }

    render() {
        return (
            <div>
                <div>{this.title} -> {this.state.value}</div>
                <div>
                    <button onClick={e => this.changeGlobalEvent()}>{this.title}</button>
                </div>
                <hr/>
                <div>
                    GlobalEvent_1:
                    <GlobalEvent1 value={this.state.value} changeValue={e => this.onChangeGlobalEvent(e)}/>
                </div>
                <hr/>
                <div>
                    GlobalEvent_2:
                    <GlobalEvent2 value={this.state.value} changeValue={e => this.onChangeGlobalEvent(e)}/>
                </div>
                <hr/>
                <div>
                    GlobalEvent_3:
                    <GlobalEvent3 value={this.state.value} changeValue={e => this.onChangeGlobalEvent(e)}/>
                </div>
            </div>

        );
    }
}

export default GlobalEvent;
