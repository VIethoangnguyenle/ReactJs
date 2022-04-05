import React from "react";

interface StateButton {
}

interface PropsButton {
    stateLight: boolean,
}

export default class SwitchButton extends React.Component <PropsButton, {}> {
    constructor(props:PropsButton) {
        super(props);
        this.state = {
            stateLight : false,
        }
    }

    render(): React.ReactNode {
        return(
            <p>This light is {this.props.stateLight ? "ON" : "OFF"}</p>
        )
    }
}