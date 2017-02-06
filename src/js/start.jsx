const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./type/App');

module.exports = {
    start: function (element) {
        console.log(element);
        ReactDOM.render(<App />, element);
    }
};
