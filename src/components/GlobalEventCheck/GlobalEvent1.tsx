import * as React from "react";
import {GlobalEventState} from "../../store/types";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import {changeEventValue} from "../../store/actions";

interface IState {
}

interface PropsFromDispatch  {
    changeEventValue: typeof changeEventValue
}

interface PropsFromState {
    eventValue: string
}

type IProps =  PropsFromDispatch & PropsFromState;



class GlobalEvent1 extends React.Component<IProps, IState> {

    title: string = "Global event 1";

    render() {
        const {changeEventValue, eventValue} = this.props;


        return (
            <div>
                <div>{this.title} -> {eventValue}</div>
                <div>
                    <button onClick={e => changeEventValue(this.title)}>{this.title}</button>
                </div>
            </div>
        );
    }
}


const mapStateToProps = ({globalEventValue}: GlobalEventState) => ({
    eventValue: globalEventValue
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeEventValue: (value: string) => dispatch(changeEventValue(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(GlobalEvent1);
