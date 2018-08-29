import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Detail from './pages/Detail';
import Pay from './pages/Pay';
import Layout from './components/Layout';
import SubLayout from './components/SubLayout';

const Home3 = props => (<SubLayout>
					<Route path="/home3/list" component={List} />
					<Route path="/home3/detail" component={Detail} />
					<Route path="/home3/pay" component={Pay} />
				</SubLayout>)
const Router = props => (
	<BrowserRouter>
		<Layout>
			<Route exact path="/" component={Home} />
			<Route path="/home2" component={Home} />
			<Route path="/home3" component={Home3} />
			<Route path="/home4" component={Home} />
		</Layout>
	</BrowserRouter>
);

export default Router;