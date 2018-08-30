import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class LayPage extends Component {
	render (){
		return (<Content style={{ padding: '0 50px' }}>
				<Breadcrumb style={{ margin: '16px 0' }}>
					<Breadcrumb.Item>App</Breadcrumb.Item>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>List</Breadcrumb.Item>
				</Breadcrumb>
				<Layout
					style={{
						background: '#fff'
					}}
				>
					<Sider with={200}>
						<Menu
							mode="inline"
							defaultSelectedKeys={['2']}
							defaultOpenKeys={['sub1']}
							style={{
								height: '100%'
							}}
						>
							<SubMenu key="sub1" title={<span><Icon type="user" />subnav1</span>}>
								<Menu.Item key="1"><Link to="/home3/list">options1</Link></Menu.Item>
								<Menu.Item key="2"><Link to="/home3/detail">options2</Link></Menu.Item>
								<Menu.Item key="3"><Link to="/home3/pay">options3</Link></Menu.Item>
							</SubMenu>
							<SubMenu key="sub2" title={<span><Icon type="user" />subnav2</span>}>
								<Menu.Item key="4">options4</Menu.Item>
								<Menu.Item key="5">options5</Menu.Item>
								<Menu.Item key="6">options6</Menu.Item>
							</SubMenu>
							<SubMenu key="sub3" title={<span><Icon type="user" />subnav3</span>}>
								<Menu.Item key="7">options7</Menu.Item>
								<Menu.Item key="8">options8</Menu.Item>
								<Menu.Item key="9">options9</Menu.Item>
							</SubMenu>
						</Menu>
					</Sider>
					<Content style={{ padding: '20px' }}>{this.props.children}</Content>
				</Layout>
			</Content>);
	}
}

export default LayPage;