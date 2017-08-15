import React from 'react';
import ReactDOM from 'react-dom';
import './Header.sass';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="header">
                <h1>React Template</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quaerat, quos. Repellendus illo est enim doloremque incidunt maxime corrupti, voluptates assumenda deserunt ut debitis vel id deleniti consequuntur vero nisi.</p>
            </div>

        );
    }
}

export default Header;
