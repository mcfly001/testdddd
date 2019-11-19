import React, { Component } from 'react';
import PropTypes from 'prop-types';

class contactByProps extends Component{
  constructor(props, context) {
    super(props, context)
    this.changeItems = this.changeItems.bind(this)
  }

  // 添加下面属性
  static contextTypes = {
    color: PropTypes.string
  }

  changeItems() {
    this.props.handlerChangeItmes([233, 456, 55], 2222)
  }

  render() {
    return (
      <div>
        <div className="title">contactByProps</div>
        {
          this.props.items.map((item, index) => {
            return <span key={index}>{item}</span>
          })
        }
        <div onClick={this.changeItems}>从子组件修改父组件</div>
        <div>{this.context.color}</div>
      </div>
    )
  }
}

export default contactByProps