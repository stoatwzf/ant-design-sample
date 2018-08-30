import React, { Component } from 'react';
import { Button, Icon, Steps, AutoComplete, Cascader, Checkbox, DatePicker, Form, Input, Mention, Radio, Select, Slider, Switch, TreeSelect, TimePicker } from 'antd';
import options from '../../util/address';
import { prolist } from '../../util/prolist.json';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const { toString, toContentState } = Mention;
const FormItem = Form.Item;

@Form.create()
class Detail extends Component {
	state = {
		result: []
	}

	searchHandler = value => {
		let result;

		if (!value || value.includes('@')){
			result = [];
		} else {
			result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
		}
		this.setState({
			result
		});
	}

	submitHandler = event => {
		event.preventDefault();
		this.props.form.validateFields((err, value) => {
			if (!err){
				console.log(value);
			}
		});
	}

	changeHandler = contentState => {
		console.log(toString(contentState));
	}

	render (){
		const { result } = this.state;
		const { getFieldDecorator } = this.props.form;
		const children = result.map(email => <AutoComplete.Option key={email}>{email}</AutoComplete.Option>);
		const marks = {
			0: '0°C',
			50: '50°C',
			100: '100°C',
		};
		const treeData = [{
		  title: 'Node1',
		  value: '0-0',
		  key: '0-0',
		  children: [{
		    title: 'Child Node1',
		    value: '0-0-1',
		    key: '0-0-1',
		  }, {
		    title: 'Child Node2',
		    value: '0-0-2',
		    key: '0-0-2',
		  }],
		}, {
		  title: 'Node2',
		  value: '0-1',
		  key: '0-1',
		}];

		return (<div>
			<Steps current={1}>
				<Steps.Step title="Finished" description="This is a description" />
				<Steps.Step title="Pay" description="This is a description" />
				<Steps.Step title="Success" description="This is a description" />
			</Steps>
			<Form style={{ padding: '15px 0' }} onSubmit={this.submitHandler}>
				<FormItem>
					<AutoComplete
						style={{ width: 200 }}
						onSearch={this.searchHandler}
						placeholder="input here"
					>
						{children}
					</AutoComplete>
				</FormItem>
				<FormItem>
					{getFieldDecorator('address')(
						<Cascader
							style={{ width: 400 }}
							options={options}
							placeholder="Please select"
						/>
					)}
				</FormItem>
				<FormItem>
					{prolist.map((list, key) => (
						<Checkbox.Group
							key={key}
							options={list}
							defaultValue={["Apple"]}
						/>
					))}
				</FormItem>
				<FormItem>
					{getFieldDecorator('username', {
						rules: [{ required: true }]
					})(
						<Input
							prefix={<Icon type="user" style={{ color: 'rgba(0, 0, 0, .25)'}} />}
							placeholder="Username"
						/>
					)}
				</FormItem>
				<FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
        	<Mention
        		onChange={this.changeHandler}
        		defaultValue={toContentState('@abc123')}
        		suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
        	/>
        </FormItem>
        <FormItem>
        	<Radio.Group>
        		<Radio value={1}>A</Radio>
        		<Radio value={2}>B</Radio>
        		<Radio value={3}>C</Radio>
        		<Radio value={4}>D</Radio>
        	</Radio.Group>
        </FormItem>
        <FormItem>
        	{getFieldDecorator('sle', {
        		rules: [{ required: true }]
        	})(
        		<Select>
        			<Select.Option value="Jack">Jack</Select.Option>
        			<Select.Option value="Stoat">Stoat</Select.Option>
        			<Select.Option value="Moxi">Moxi</Select.Option>
        		</Select>
        	)}
        </FormItem>
        <FormItem>
        	<Switch />
        </FormItem>
        <FormItem>
        	<Slider marks={marks} defaultValue={37} />
        </FormItem>
        <FormItem>
        	<TreeSelect
        		style={{ width: 300 }}
        		treeData={treeData}
        	/>
        	<TimePicker />
        </FormItem>
				<FormItem>
					<Button type="primary" htmlType="submit">Pay</Button>
				</FormItem>
			</Form>
		</div>);
	}
}

export default Detail;








