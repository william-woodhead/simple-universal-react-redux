import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './About.scss';

export default class About extends Component {
  componentWillMount() {
    if (!this.props.data) this.props.getAboutData();
  }

  render() {
    return (
      <div className={styles.About}>
        This is the about page
        {JSON.stringify(this.props.data)}
      </div>
    );
  }
}

About.propTypes = {};
