import * as React from "react";

type Props = {
    language: string,
    value: string,
    onSelect: ((language: string) => void)
}
type State = {
    language: string,
    value: string
}


class WelcomeLanguage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            language: this.props.language,
            value: this.props.value
        }
    }


    choiceLanguage(event: any) {
        this.setState(
            () => {
            },
            () => {
                this.props.onSelect(this.props.language);
            }
        )
    }

    render() {
        return (
            <div>
                {this.state.language}: {this.state.value}, <button onClick={e => this.choiceLanguage(e)}>Change</button>
            </div>
        )
    }
}

export default WelcomeLanguage;
