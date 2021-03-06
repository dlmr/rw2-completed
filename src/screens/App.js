import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

export default class App extends Component {
    static propTypes = {
        children: React.PropTypes.object
    };

    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><IndexLink to="/">Start</IndexLink></li>
                        <li><Link to="/clicker">Clicker</Link></li>
                        <li><Link to="/github">Github</Link></li>
                    </ul>
                </nav>
                { this.props.children }
            </div>
        );
    }
}
