var React = require('react');

var Results = React.createClass({
	render: function() {
		var data = this.props.words.map(function(word) {
			return (
				<div className="result-box" key={word.term}>
				<h3 className="word-title">
				{word.term}
				</h3>
				<p className="word-definition">{word.definition}</p>
				</div>
				)
		})
		return (
			<div>
			{data}
			</div>
			)
	}
});

module.exports = Results;
