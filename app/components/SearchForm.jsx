var React = require('react') ;

var SearchForm = React.createClass({
	onFormSubmit: function (e) {
		e.preventDefault();
		var term = this.refs.term.value;
		this.props.onSearch(term);
		this.refs.term.value = '';
	},
	render: function() {
		return (
			<div>
			  <form onSubmit={this.onFormSubmit}>
			  <input type="search" ref="term" placeholder="Enter word here..." />
			  <button>Search</button>
			  </form>
			</div>
			)
	}
});

module.exports = SearchForm;