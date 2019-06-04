import * as React from 'react';
import lodash from 'lodash';

class Index extends React.Component {
    render() {
        console.log(lodash.isEmpty([]));
        return (
            <div>index</div>
        )
    }
}

export default Index;