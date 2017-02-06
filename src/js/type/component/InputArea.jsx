const React = require('react');

class InputArea extends React.Component {
    constructor (props) {
        super(props);
        this.state = {inputValue: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        let value = event.target.value;
        this.setState({inputValue: value});
        this.props.onInputUpdate(value);
    }

    componentDidMount () {
        this.focusInput();
    }

    focusInput () {
        this.inputElement.focus();
    }

    render () {
        return (
            <div className="action-bar-inner">
                <div className="action-bar-inner-item">
                    <div className="input-prefix">Something again</div>
                </div>
                <div className="action-bar-inner-item action-bar-input-container">
                    <input type="text"
                        className="input"
                        placeholder="Rittybox Type"
                        value={this.state.inputValue}
                        ref={(input) => {this.inputElement = input;}}
                        onChange={this.handleChange}
                        onBlur={() => this.focusInput()} />
                </div>
            </div>
        );
    }
}

module.exports = InputArea;
