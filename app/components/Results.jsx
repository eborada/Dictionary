var React = require('react');

var Results = React.createClass({
	render: function() {
		var data = this.props.words.map(function(word) {
			return (
				<div className="result-box" key={word.term}>
				<h3>
				{word.term}
				</h3>
				<p>{word.definition}</p>
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