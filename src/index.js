import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import RoutesPopup from './components/routes/index';

function Web2App() {
	return (
		<BrowserRouter>
			<React.StrictMode>
				<RoutesPopup />
			</React.StrictMode>
		</BrowserRouter>
	)
};

ReactDOM.render(
	<Web2App />,
  document.getElementById('root')
);

reportWebVitals();
