import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './Home.scss';

export default class Home extends Component {
  componentDidMount() {
    // only fetch data if it does not already exist
    if (!this.props.data) this.props.getData();
  }

  render() {
    const { data } = this.props;
    if (!data) return 'Loading async data...';

    return (
      <div className={styles.Home}>
        <h1>Home page</h1>
        <p>Async Text:  {data.text}</p>
      </div>
    );
  }
}

Home.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string
  }),
  getData: PropTypes.func.isRequired
};

Home.defaultProps = {
  data: null
};
