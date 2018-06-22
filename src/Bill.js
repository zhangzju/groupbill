import React, { Component } from 'react';
import { Row, Col} from 'antd';
import './App.css';
import Item from './Item';


class Bill extends Component {
    constructor(){
        super()
        this.state = {
            bills:[
                {
                    "title":"经费支出",
                    "done":false,
                    "time":"星期五",
                    "description":"肯德基宅急送，果小二水果"
                },{
                    "title":"经费支出",
                    "done":false,
                    "time":"星期五",
                    "description":"肯德基宅急送，果小二水果"
                },{
                    "title":"经费支出",
                    "done":false,
                    "time":"星期五",
                    "description":"肯德基宅急送，果小二水果"
                }
            ]
        }
    }

  render() {
    return (
    <div>
    <Row type="flex" justify="space-around" align="middle">
      <Col span={4}></Col>
      <Col span={8}><Item bills={this.state.bills}>col-4</Item></Col>
      <Col span={4}></Col>
    </Row>
  </div>
    );
  }
}


export default Bill;