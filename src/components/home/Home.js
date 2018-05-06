import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.Home}>
        This is the home page
        {JSON.stringify(this.props.home)}
      </div>
    );
  }
}

Home.propTypes = {};
