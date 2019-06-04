import * as React from 'react';
import lodash from 'lodash';

class Another extends React.Component {
    render() {
        console.log(lodash.isEmpty([]));
        return (
            <div>another</div>
        )
    }
}

export default Another