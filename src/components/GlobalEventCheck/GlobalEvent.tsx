import * as React from "react";
import {GlobalEventState} from "../../store/types";
import {changeEventValue} from "../../store/actions";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import GlobalEvent1 from "./GlobalEvent1";
import GlobalEvent2 from "./GlobalEvent2";

interface IState {

}


interface PropsFromDispatch  {
    changeEventValue: typeof changeEventValue
}

interface PropsFromState {
    eventValue: string
}

type IProps =  PropsFromDispatch & PropsFromState;

class GlobalEvent extends React.Component<IProps, IState> {

    title: string = "Global event MAIN";

    render() {

        const {changeEventValue, eventValue} = this.props;

        return (
            <div>
                <div>{this.title} -> {eventValue}</div>
                <div>
                    <button onClick={e => changeEventValue(this.title)}>{this.title}</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(GlobalEvent);
