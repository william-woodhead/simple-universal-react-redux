import React, { Component } from 'react';
import styles from './NotFound.scss';

export default class NotFound extends Component {
  render() {
    return (
      <div className={styles.NotFound}>
        Route not found
      </div>
    );
  }
}
