import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button/Button';
import './Header.sass';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="header">
                <div className="header__top">
                    <div className="header__top-container">
                        <h1>React Template</h1>
                        <p className="slogan">Стартовый шаблон для разработки с использованием ReactJS, Pug, Webpack, Sass, PostCSS.</p>
                    </div>
                </div>

                <Button className={''} label="Жми меня полностью!"/>
            </div>

        );
    }
}

export default Header;
