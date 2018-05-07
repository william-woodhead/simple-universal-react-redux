import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './About.scss';

export default class About extends Component {
  componentDidMount() {
    // only fetch the data if there is no data
    if (!this.props.data) this.props.getData();
  }

  render() {
    const { data } = this.props;
    if (!data) return 'Loading async data...';

    return (
      <div className={styles.About}>
        <h1>About page</h1>
        <p>Async Text:  {data.text}</p>
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
