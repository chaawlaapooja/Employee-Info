import './main.html';
import React from 'react';
import ReactDOM from 'react-dom';

import EmployeeList from './components/employee_list';

const App = () => {
  return (
    <div>
    	<nav className="nav navbar-inverse">
				<div className="navbar-header">
					<a href="/" className="navbar-brand">Employee Info</a>
				</div>
				
		</nav><br/>
      <EmployeeList/>
    </div>
  );
};

// After Meteor loads in the browser, render my app to the DOM.
Meteor.startup(() => {
  // React render call
  ReactDOM.render(<App />, document.querySelector('.container'));
});
