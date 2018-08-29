import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import { LocaleProvider, Layout } from 'antd';
import { NavLink } from 'react-router-dom';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import reducers from './reducers';
import Router from './Router';
import '../public/index.less';

const { Sider, Header, Content, Footer } = Layout;
const store = createStore(reducers, applyMiddleware(reduxPromise));
class App extends Component {
	render (){
		return (
			<Provider store={store}>
				<LocaleProvider locale={zhCN}>
					<Router />
				</LocaleProvider>
			</Provider>
		);
	}
}

render(<App />, document.querySelector('#root'));