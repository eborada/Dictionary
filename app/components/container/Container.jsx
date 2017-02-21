var React = require('react');

var Dictionary = require('json!../../data/dictionary.json') ;
var SearchForm = require('SearchForm') ;
var Results = require('Results');

var Container = React.createClass({
	getInitialState: function() {
		return {
			results: []
		}
	},
	handleSearch: function(term) {
		var searchTerm = term.toUpperCase();
		var searchRes = this.state.results;
		for (var key in Dictionary) {
<<<<<<< HEAD:app/components/container/Container.jsx
			if (Dictionary.hasOwnProperty(key) && searchTerm === key) {
=======
			if (Dictionary.hasOwnProperty(key)&& searchTerm === key) {
>>>>>>> ce77f964e52456d432d20ef7d06ed5aca8baaa96:app/components/Container.jsx
				searchRes.unshift(searchRes.pop(searchRes.push({term: searchTerm, definition: Dictionary[key]})));
				this.setState({results: searchRes})
			}
		}
	},
	render: function() {
		var res = this.state.results;
		function renderResults() {
			if (res.length !== 0) {
				return (<Results words={res} />)
			}
			else {
				return (<p className="text">No Results</p>)
			}
		}
		return (
			<div className="outer-box">
				<h1>Dictionary Corner</h1>
			  <SearchForm onSearch={this.handleSearch} />
			  {renderResults()}
			</div>
			)
	}
});

module.exports = Container;
