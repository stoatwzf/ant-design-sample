import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import reducers from './reducers';
import Router from './Router';

const store = createStore(reducers, applyMiddleware(reduxPromise));
class App extends Component {
	render (){
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

render(<App />, document.querySelector('#root'));