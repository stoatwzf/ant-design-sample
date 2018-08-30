import React, { Component } from 'react';
import { Tabs, Timeline, Tree } from 'antd';

const { TabPane } = Tabs;
const TreeNode = Tree.TreeNode;

class Plat extends Component {
	render (){
		return (<div>
			<Tabs>
				<TabPane tab="Tab 1" key="1">Content of Tab TabPane 1</TabPane>
				<TabPane tab="Tab 2" key="2">Content of Tab TabPane 2</TabPane>
				<TabPane tab="Tab 3" key="3">Content of Tab TabPane 3</TabPane>
			</Tabs>
			<Timeline mode="alternate">
				<Timeline.Item>2018</Timeline.Item>
				<Timeline.Item>2018</Timeline.Item>
				<Timeline.Item>2018</Timeline.Item>
				<Timeline.Item>2018</Timeline.Item>
				<Timeline.Item>2018</Timeline.Item>
				<Timeline.Item>2018</Timeline.Item>
			</Timeline>
			<Tree
        checkable
        defaultExpandedKeys={['0-0-0', '0-0-1']}
        defaultSelectedKeys={['0-0-0', '0-0-1']}
        defaultCheckedKeys={['0-0-0', '0-0-1']}
        
      >
        <TreeNode title="parent 1" key="0-0">
          <TreeNode title="parent 1-0" key="0-0-0" disabled>
            <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
            <TreeNode title="leaf" key="0-0-0-1" />
          </TreeNode>
          <TreeNode title="parent 1-1" key="0-0-1">
            <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-0" />
          </TreeNode>
        </TreeNode>
      </Tree>
		</div>);
	}
}

export default Plat;