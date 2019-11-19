import React, { Component } from 'react';
import ContactByProps from './conponents/ContactByProps'
import { Link } from 'react-router'
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.name = 'zh'
    this.state = {
      items: [1, 2, 3, 4, 5]
    }
   this.handlerChangeItmes = this.handlerChangeItmes.bind(this)
  }

  // react 第二种通信方式
  static childContextTypes = {
    color: PropTypes.string
  }

  getChildContext() {
    return {
      color: "#f00"
    }
  }

  handlerChangeItmes(items) {
    this.setState({
      items: items
    })
  }

  render() {
    return (
      <div className="App">
        <div onClick={this.handlerChangeItms}>改变items</div>
        <ContactByProps items={this.state.items} 
                        handlerChangeItmes={this.handlerChangeItmes}>
        </ContactByProps>
        <div>
          <Link to="/about">About</Link>
        </div>

        <div>
          <Link to="/todolist">todolist</Link>
        </div>
      </div>
    );
  }
}

export default App;
