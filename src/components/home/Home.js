import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.Home}>
        Hello Home man
        {JSON.stringify(this.props.app)}
      </div>
    );
  }
}

Home.propTypes = {};
