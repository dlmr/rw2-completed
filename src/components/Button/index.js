import React, { Component } from 'react';

import styles from './styles.css';

export default class Button extends Component {
    render() {
        return (
            <button className={styles.main} onClick={this.props.onClick}>
                { this.props.name }
            </button>
        );
    }
}
