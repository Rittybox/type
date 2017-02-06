const React = require('react');

const ResultItem = require('./ResultItem');

function ResultList (props) {
    let items = props.items.map((item) =>
        <ResultItem key={item} text={item} />
    );
    return (
        <div className="results">
           <ul className="result-list">{items}</ul>
        </div>
    );
}

module.exports = ResultList;
