import React from 'react';
import Button from '../Button/Button';
import './Form.sass';

class Form extends React.Component {
    render() {
        return (
            <form className='form'>
                <input type="text" placeholder='Enter something...'/>
                <Button className={''} label='Submit'/>
            </form>
        );
    }
}

export default Form;
