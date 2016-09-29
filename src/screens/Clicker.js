import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Button from '../components/Button';
import { click } from '../redux/clicker';

function mapStateToProps(state) {
    return {
        clicker: state.clicker
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ click }, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Clicker extends React.Component {
    static propTypes = {
       // bound actions
       click: React.PropTypes.func.isRequired,
       // connected values from store
       clicker: React.PropTypes.number,
   };

    render() {
        return (
            <div>
                <h1>Clicker</h1>
                { this.props.clicker }
                <Button name="Increment" onClick={ this.props.click } />
            </div>
        );
    }
}
