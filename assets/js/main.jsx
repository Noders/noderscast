var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
//var TopBar = require('../topbar/topbar.jsx');
module.exports =  React.createClass({
  render: function() {
  	/*

        return (
	        <div>
	        	<TopBar/>
		        <div className="main-container">
		        	<RouteHandler/>
				</div>
			</div>
		)
		*/
		 return (
	        <div>
		        <div className="main-container">
		        	<RouteHandler/>
				</div>
			</div>
		);
    }
});