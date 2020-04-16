import React from "react";
import Alert from "./Alert";

export default class Success_alert extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
           <Alert title="Success: Thanks for sign up"/>
        )
    }

}