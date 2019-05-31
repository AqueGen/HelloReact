import * as React from "react";
import {GLOBAL_EVENT} from "../../Consts/GlobalEvent";

interface IState {
}

interface IProps {
    changeValue: ((value: string) => void)
    value: string
}


class GlobalEvent2 extends React.Component<IProps, IState> {

    title: string = "Global event 2";

    constructor(props: IProps) {
        super(props);


    }

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any): void {
        if(this.props.changeValue !== prevProps.changeValue){
            this.setState({
                eventValue: this.props.value
            });
        }
    }

    changeGlobalEvent(): void {
        this.props.changeValue(this.title)
    }

    render() {
        return (
            <div>
                <div>{this.title} -> {this.props.value}</div>
                <div>
                    <button onClick={e => this.changeGlobalEvent()}>{this.title}</button>
                </div>
            </div>
        );
    }
}

export default GlobalEvent2;
