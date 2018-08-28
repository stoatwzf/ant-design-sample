import React, { Component } from 'react';

class Detail extends Component {
	render (){
		return (<div>
			<h5>Pay</h5>
			<p>
				Price: $200.00
			</p>
			<input type="button" value="pay" />
		</div>);
	}
}

export default Detail;