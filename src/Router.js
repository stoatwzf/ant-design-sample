import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Detail from './pages/Detail';
import Pay from './pages/Pay';

const Router = props => (
	<BrowserRouter>
		<Fragment>
			<Route exact path="/" component={Home} />
			<Route path="/list" component={List} />
			<Route path="/detail" component={Detail} />
			<Route path="/pay" component={Pay} />
		</Fragment>
	</BrowserRouter>
);

export default Router;