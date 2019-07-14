import React from 'react';

class OperatingSystem extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.match.params.os}</h3>
            </div>
        );
    }
}

export default OperatingSystem;