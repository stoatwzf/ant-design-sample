import React, { Component } from 'react';
import { Dropdown, Icon, Menu } from 'antd';

class List extends Component {
	render (){
		const menu = (<Menu>
			<Menu.Item>1st menu item</Menu.Item>
			<Menu.Item>1st menu item</Menu.Item>
			<Menu.Item>1st menu item</Menu.Item>
			<Menu.Item>1st menu item</Menu.Item>
			<Menu.Item>1st menu item</Menu.Item>
		</Menu>);

		return (<ul>
			<li>
				<Dropdown overlay={menu}>
					<p>product list 0<Icon type="down"/></p>
				</Dropdown>
			</li>
			<li>product list 1</li>
			<li>product list 2</li>
			<li>product list 3</li>
			<li>product list 4</li>
		</ul>);
	}
}

export default List;