import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { ShoppingState } from './context/ShoppingState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<ShoppingState>
				<App/>
		</ShoppingState>
	</BrowserRouter>
);

