import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class LayPage extends Component {
	render (){
		return (<Layout>
			<Header className="header">
	      <div className="logo" />
	      <Menu
	        theme="dark"
	        mode="horizontal"
	        defaultSelectedKeys={['2']}
	        style={{ lineHeight: '64px' }}
	      >
	        <Menu.Item key="1">
	        	<Link to="/">Home 1</Link>
	        </Menu.Item>
	        <Menu.Item key="2">
	        	<Link to="/home2">Home 2</Link>
	        </Menu.Item>
	        <Menu.Item key="3">
	        	<Link to="/home3">Home 3</Link>
	        </Menu.Item>
	        <Menu.Item key="4">
	        	<Link to="/home4">Home 4</Link>
	        </Menu.Item>
	      </Menu>
	    </Header>
			{this.props.children}
			<Footer style={{ textAlign: 'center' }}>
				Ant Design ©2018 Created by Ant UED
			</Footer>
		</Layout>);
	}
}

export default LayPage;