import React from "react";
import Alert from "./Alert";

export default class Welcome_alert extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Alert title="Welcome: Thanks for visiting website" />
        )
    }

}