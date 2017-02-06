const React = require('react');

const ActionBar = require('./ActionBar');
const ResultList = require('./ResultList');

const {filter} = require('../search/DirectoryExplorer');

class SearchView extends React.Component {
    constructor (props) {
        super(props);
        this.state = {items: []};

        this.handleInputUpdate = this.handleInputUpdate.bind(this);
    }

    handleInputUpdate (value) {
        this.setState({items: filter(value)});
    }

    render () {
        return (
            <div className="search-view-container">
                <ActionBar onInputUpdate={this.handleInputUpdate} />
                <ResultList items={this.state.items} />
            </div>
        );
    }
}

module.exports = SearchView;
