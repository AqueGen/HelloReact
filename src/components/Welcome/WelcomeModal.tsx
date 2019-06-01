import {type} from "os";
import * as React from "react";
import * as Modal from "react-modal";
import {Ref, RefObject} from "react";
import {IWelcomeType} from "../../store/types";

type Props = {
    welcome: IWelcomeType
}
type States = {
    welcome: IWelcomeType,
    isShow: boolean
}

class WelcomeModal extends React.Component<Props, States> {

    constructor(props: Props) {
        super(props);

        this.state = {
            welcome: props.welcome,
            isShow: false
        }
    }

    show(): void {
        this.setState({
            welcome: this.props.welcome,
            isShow: true
        })
    }

    close(): void {
        this.setState({
            welcome: this.props.welcome,
            isShow: false
        })
    }

    render() {
        return (
            <Modal isOpen={this.state.isShow}>
                <div>Я окошко</div>
                <div>Language: {this.state.welcome.language}, Value: {this.state.welcome.hello}</div>
                <button onClick={e => this.close()}>Закрой меня полностью</button>
            </Modal>)
    }

}

export default WelcomeModal;
