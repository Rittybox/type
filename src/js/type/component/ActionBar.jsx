const React = require('react');

const InputArea = require('./InputArea');

class ActionBar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {value: ''};
    }

    render () {
        return (
            <div className="action-bar">
                <div className="action-bar-drag">
                    <InputArea onInputUpdate={value => this.props.onInputUpdate(value)} />
                </div>
            </div>
        );
    }
}

module.exports = ActionBar;
