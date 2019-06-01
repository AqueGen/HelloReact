import * as React from 'react';
import {createRef, EventHandler, Ref, RefObject} from "react";
import {number, string} from "prop-types";
import * as Modal from 'react-modal';
import {createContext} from 'react';
import WelcomeLanguage from "./WelcomeLanguage";
import WelcomeModal from "./WelcomeModal";
import {IWelcomeType} from "../../store/types"; // we need this to make JSX compile

type Props = {
    title: string
}

type State = {
    title: string,
    welcome: IWelcomeType
}


class Welcome extends React.Component<Props, State> {

    welcomes: IWelcomeType[] = [
        {
            language: "English",
            hello: "Welcome world"
        },
        {
            language: "Український",
            hello: "Привіт світ"
        },
        {
            language: "Кацапский",
            hello: "Привет мир"
        }
    ];

    welcomeModal: WelcomeModal | null | undefined;

    constructor(props: Props) {
        super(props);


        this.state = {
            title: props.title,
            welcome: this.welcomes[0]
        };

    }

    _handleSelectWelcome(event: string): void {
        let filteredWelcomes: IWelcomeType[] = this.welcomes.filter(m => m.language == event);

        if (filteredWelcomes.length > 0) {
            this.setState({
                welcome: filteredWelcomes[0]
            });
        }
    };


    render() {

        return (
            <div>
                <h2>{this.state.title}</h2>

                <p>Language: {this.state.welcome.language}, Value: {this.state.welcome.hello}</p>

                <button onClick={e => this.welcomeModal!.show()}>Show modal</button>
                <WelcomeModal ref={myRef => this.welcomeModal = myRef}
                              welcome={this.state.welcome}
                />

                <div>
                    {this.welcomes.map((welcome, index) => (
                        <WelcomeLanguage key={index}
                                         language={welcome.language}
                                         value={welcome.hello}
                                         onSelect={e => this._handleSelectWelcome(e)}
                        />

                    ))}
                </div>
            </div>
        )
    }
}

export default Welcome;
