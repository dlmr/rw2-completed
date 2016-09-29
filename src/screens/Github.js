import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Github extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  onChange = (e) => {
    this.setState({value: e.target.value});
  }

  render() {
    const children = this.props.children ?
      this.props.children :
      (
        <div>
          <p>Please select a user by typing and clicking the link</p>
          <input onChange={this.onChange} />&nbsp;
          <Link to={{ pathname: `/github/user/${this.state.value}` }}>Open user!</Link>
        </div>
      );
    return (
      <div>
        <h2>Github</h2>
        { children }
      </div>
    );
  }
}
