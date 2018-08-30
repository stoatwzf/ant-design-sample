import React, { Component } from 'react';
import { Rate, Transfer, Calendar } from 'antd';

class Detail extends Component {
	render (){
		const mockData = [];

		for (let i = 0; i < 20; i++) {
		  mockData.push({
		    key: i.toString(),
		    title: `content${i + 1}`,
		    description: `description of content${i + 1}`,
		    disabled: i % 3 < 1,
		  });
		}
		const targetKeys = mockData
		  .filter(item => +item.key % 3 > 1)
		  .map(item => item.key);

		return (<div>
			<h3>captial</h3>
			<Calendar />
			<Rate />
			<Transfer
				dataSource={mockData}
				render={item => item.title}
			/>
		</div>);
	}
}

export default Detail;