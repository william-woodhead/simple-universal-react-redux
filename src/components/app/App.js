/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import styles from './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.TopBar}>
          <Link className={styles.Link} to="/">Home</Link>
          <Link className={styles.Link} to="/about">About</Link>
        </div>
        {this.props.children}
        <div className={styles.Footer}>William Woodhead - MIT License</div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired
};
