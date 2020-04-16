import React from "react";
import Alert from "./Alert";

export default class Error_alert extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
           <Alert title="Error: Please fill in all fields"/>
        )
    }

}