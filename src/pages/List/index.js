import React, { Component } from 'react';
import { Dropdown, Icon, Menu, Pagination, Avatar, Badge, List,  Popover } from 'antd';
import productList from '../../util/list.json';

class ListPage extends Component {
	render (){
		const content = (<div>
			<p>content</p>
			<p>content</p>
			<p>content</p>
		</div>);

		return (<div>
			<Badge count={5}>
	      <a href="#" className="head-example" />
	    </Badge>
			<List
				dataSource={productList.list}
				renderItem={item => (
					<List.Item>
						<Popover content={content} title="Title">
							<Avatar icon={item.avatar} />{item.text}
						</Popover>
					</List.Item>
				)}
			/>
			<Pagination defaultCurrent={1} total={50} />
		</div>);
	}
}

export default ListPage;