import * as React from "react";
import {GLOBAL_EVENT} from "../../Consts/GlobalEvent";

interface IState {
}

interface IProps {
    value: string,
    changeValue: ((value: string) => void)
}


class GlobalEvent1 extends React.Component<IProps, IState> {

    title: string = "Global event 1";


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

export default GlobalEvent1;
