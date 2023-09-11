import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import { Store } from '@reduxjs/toolkit';
import { RootState } from './store/store';

const store: Store<RootState> = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);