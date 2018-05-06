import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        Hello home component
        {JSON.stringify(this.props.app)}
      </div>
    );
  }
}

Home.propTypes = {};
