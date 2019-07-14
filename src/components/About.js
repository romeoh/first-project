import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import OperatingSystem from './OperatingSystem';

class About extends React.Component {
    render() {
        return (
            <div>
                <h1>About</h1>

                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/windows`}>Windows</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/mac-os`}>Mac OSX</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/cent-os`}>CentOS</Link>
                    </li>
                </ul>

                <Route path={`${this.props.match.path}/:os`} component={OperatingSystem} />
                <Route exact path={this.props.match.path}
                    render={() => <h3>OS를 선택하세요.</h3>}
                />
            </div>
        );
    }
}

export default About;