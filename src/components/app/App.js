import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        Hello App
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {};
