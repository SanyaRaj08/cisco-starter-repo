import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://localhost:55455');

class LatencyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latency: null
        };
    }

    componentDidMount() {
        client.onmessage = (message) => {
            this.setState({
                latency: new Date().getTime() - parseInt(message.data)
            });
        };
    }

    render() {
        return (
            <div className="latency-component">
                <p>Packet Latency: {this.state.latency} ms</p>
            </div>
        );
    }
}

export default LatencyComponent;


