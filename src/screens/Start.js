import React from 'react';

import Button from '../components/Button';

export default class Start extends React.Component {
    render() {
        return (
            <div>
                Hello World
                <Button name="Click me" onClick={ () => alert('Hello') }/>
            </div>
        );
    }
}
