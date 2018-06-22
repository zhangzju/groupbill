import React, { Component } from 'react';
import './App.css';
import {List} from 'antd';

class Item extends Component {
    constructor(){
        super();
    }

    render() {
        return   <List
        itemLayout="horizontal"
        dataSource={this.props.bills}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta title={item.title} description={item.description}/>
          </List.Item>
        )}
      />;
      }
}

export default Item;