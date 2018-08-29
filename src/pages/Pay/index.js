import React, { Component } from 'react';
import { Button } from 'antd';

class Detail extends Component {
	render (){
		return (<div>
			<h5>Pay</h5>
			<p>
				Price: $200.00
			</p>
			<Button type="primary">Pay</Button>
		</div>);
	}
}

export default Detail;