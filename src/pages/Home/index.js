import React, { Component } from 'react';
import { Card, Carousel, Collapse, Tooltip, Table } from 'antd';
import { table } from '../../util/table.json';
import './index.less';

const Panel = Collapse.Panel;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class Home extends Component {
	render (){
		const columns = [
			{
				title: 'name',
				dataIndex: 'name',
				key: 'name'
			},
			{
				title: 'age',
				dataIndex: 'age',
				key: 'age'
			},
			{
				title: 'address',
				dataIndex: 'address',
				key: 'address'
			}
		];

		return (<div>
			<Carousel autoplay>
				<div><h3>1</h3></div>
				<div><h3>2</h3></div>
				<div><h3>3</h3></div>
				<div><h3>4</h3></div>
			</Carousel>
			<Collapse>
				<Panel header="This is panel header 1" key="1">{text}</Panel>
				<Panel header="This is panel header 2" key="2">{text}</Panel>
				<Panel header="This is panel header 3" key="3">{text}</Panel>
			</Collapse>
			<Table dataSource={table} columns={columns} />
			<Card title="Card title" extra={<a>more</a>} style={{ width: 300 }}>
				<Tooltip title="prompt text">
					<p>Card content</p>
				</Tooltip>
				<Tooltip title="prompt text">
					<p>Card content</p>
				</Tooltip>
				<Tooltip title="prompt text">
					<p>Card content</p>
				</Tooltip>
				<Tooltip title="prompt text">
					<p>Card content</p>
				</Tooltip>
			</Card>
		</div>);
	}
}

export default Home;