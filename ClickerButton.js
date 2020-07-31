import React from 'react';
import ReactDOM from 'react-dom';

class ClickerButton extends React.Component {
    constructor() {
        super();
        this.state = {
            toIncrementBy: 1
        };
    }

    handleClick = () => {
        this.setState({
            toIncrementBy: this.state.toIncrementBy + 1
        });
    };

    render() {
        const { toIncrementBy } = this.state;

        return (
            <div>
                <button onClick={this.handleClick}>+{toIncrementBy}</button>
            </div>
        );
    }
}

export default ClickerButton;