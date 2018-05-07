import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './About.scss';

export default class About extends Component {
  componentDidMount() {
    // only fetch the data if there is no data
    if (!this.props.data) this.props.getData();
  }

  render() {
    return (
      <div className={styles.About}>
        <h1>This is the about page</h1>
        <p>Async Text:  {this.props.data}</p>
      </div>
    );
  }
}

About.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string
  }),
  getData: PropTypes.func.isRequired
};

About.defaultProps = {
  data: null
};
