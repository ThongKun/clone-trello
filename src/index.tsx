import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppStateContextProvider } from './AppStateContext';

ReactDOM.render(
	<AppStateContextProvider>
		<App />
	</AppStateContextProvider>,
	document.getElementById('root')
);
