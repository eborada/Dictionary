var React = require('react');

var Dictionary = require('json!../data/dictionary.json') ;
var SearchForm = require('SearchForm') ;
var Results = require('Results');

var Container = React.createClass({
	getInitialState: function() {
		return {
			results: []
		}
	},
	handleSearch: function(term) {
		var term = term;
		var searchTerm = term.toUpperCase();
		var searchRes = this.state.results;
		for (var key in Dictionary) {
			if (Dictionary.hasOwnProperty(key)) {
				if (searchTerm === key) {
				searchRes.push({term: searchTerm, definition: Dictionary[key]});
				this.setState({results: searchRes.reverse()})
				}
			}
		}
		console.log(this.state.results)
	},
	render: function() {
		var res = this.state.results;
		function renderResults() {
			if (res.length !== 0) {
				return (<Results words={res} />)
			}
			else {
				return (<p>No Results</p>)
			}
		}
		return (
			<div>
			  <SearchForm onSearch={this.handleSearch} />
			  {renderResults()}
			</div>
			)
	}
});

module.exports = Container;
