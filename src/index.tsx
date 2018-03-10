import * as React from 'react';
import { render } from 'react-dom';

class MI extends React.Component<any, any>{
    render() : React.ReactElement<any> {
        return (
            <h1>te quiero necro</h1>
        )
    }
}

render(<MI/>, document.getElementById('root'))

