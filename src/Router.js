import React, { Fragment } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Detail from './pages/Detail';
import Pay from './pages/Pay';

const Router = props => (
	<BrowserRouter>
		<Fragment>
			<div>
				<NavLink to="/">Home</NavLink><br />
				<NavLink to="/list">List</NavLink><br />
				<NavLink to="/detail">Detail</NavLink><br />
				<NavLink to="/pay">Pay</NavLink><br />
			</div>
			<Route exact path="/" component={Home} />
			<Route path="/list" component={List} />
			<Route path="/detail" component={Detail} />
			<Route path="/pay" component={Pay} />
		</Fragment>
	</BrowserRouter>
);

export default Router;