import React, { Component } from 'react';
import { Button, Icon, Row, Col, Affix } from 'antd';
import { NavLink } from 'react-router-dom';
import './index.less';



class Home extends Component {
	render (){
		return (<div>
			<Row type="flex" justify="space-between" align="top" className="captialList">
				<Col span={7}>captial 1 <Icon type="shopping-cart" /></Col>
				<Col span={7}>captial 1 <Icon type="shopping-cart" /></Col>
				<Col span={7}>captial 1 <Icon type="shopping-cart" /></Col>
				<Col span={7}>captial 1 <Icon type="shopping-cart" /></Col>
			</Row>
			<Row gutter={40} className="listCol">
	    	<Col span={6}><div>col-6</div></Col>
	    	<Col span={6}><div>col-6</div></Col>
	    	<Col span={6}><div>col-6</div></Col>
	    	<Col span={6}><div>col-6</div></Col>
	    	<Col offset={6} span={6}><div>col-6</div></Col>
	    	<Col span={6}><div>col-6</div></Col>
	    	<Col span={6}><div>col-6</div></Col>
	    	<Col offset={12} span={6}><div>col-6</div></Col>
	    	<Col span={6}><div>col-6</div></Col>
	    </Row>
			<Row>
				<Col span={6}>
					<Button type="primary" shape="circle" icon="search" />
				</Col>
			</Row>
			<Affix offsetTop={20}>
				<button type="primary">Affix top</button>
			</Affix>
		</div>);
	}
}

export default Home;