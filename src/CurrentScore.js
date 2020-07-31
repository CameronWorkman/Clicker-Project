import React from 'react';

class CurrentScore extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            increment: 1
        };
    }

    IncrementScore = () => {
        this.setState({
            count: this.state.count + this.state.increment,
            increment: this.state.increment
        });
    }

    IncrementIncrementation = () => {
        if (this.state.count >= 10) {
            this.setState({
                count: this.state.count - 10,
                increment: this.state.increment + 1
            });
        } else {
            window.alert("not enough points, kiddo!");
        }
    }

    ResetButton = () => {
        this.setState({
            count: 0,
            increment: 1
        });
    }

    render() {
        if (this.state.count <= 100) {
            return (
                <div>
                    <h1><strong>Current Score: { this.state.count }</strong></h1>
                    <button onClick={this.IncrementScore}>+{ this.state.increment }</button><br /><br />
                    <button onClick={this.IncrementIncrementation}>Pay 10 points to change from +{this.state.increment} to +{this.state.increment + 1}</button><br /><br />
                    <button onClick={this.ResetButton}>Reset Score</button>
                </div>
            );
        } else {
            return(
                <div>
                    <h1><strong>Current Score: { this.state.count }</strong></h1>
                    <h1>YOU WIN!</h1>
                    <button onClick={this.ResetButton}>Reset Score</button>
                </div>
            );
        }
    }
}


export default CurrentScore;