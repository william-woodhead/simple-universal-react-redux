import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './Home.scss';

export default class Home extends Component {
  componentWillMount() {
    if (!this.props.data) this.props.getHomeData();
  }

  render() {
    return (
      <div className={styles.Home}>
        This is the home page
        {JSON.stringify(this.props.data)}
      </div>
    );
  }
}

Home.propTypes = {
  data: PropTypes.object,
  getHomeData: PropTypes.func.isRequired
};

Home.defaultProps = {
  data: null
};
