const React = require('react');
const SearchView = require('./component/SearchView')

class App extends React.Component {
    render(){
        return (<div>
                <SearchView />
            </div>);
    }
}

module.exports = App;
