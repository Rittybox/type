const React = require('react');

function ResultItem (props) {
    return (
        <li className="result-item">
            <div className="result-item-inner">
                <div className="result-item-heading">{props.text}</div>
            </div>
        </li>
    );
}

module.exports = ResultItem;
