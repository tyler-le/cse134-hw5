/*
* Source: https://reactjs.org/docs/add-react-to-a-website.html#add-react-in-one-minute
* */

'use strict';

const e = React.createElement;

class ButtonCount extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
        return e(
            'button',
            { onClick: () => this.setState({ count: this.state.count+1}) },
            `Times Clicked: ${this.state.count}`
        );
    }
}

const container = document.querySelector('#container');
const root = ReactDOM.createRoot(container);
root.render(e(ButtonCount));