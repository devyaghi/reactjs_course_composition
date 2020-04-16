import React from "react";

export default class Alert extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="box">
            {this.props.title}
        </div>
        )
    }

}