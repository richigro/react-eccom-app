import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

export default class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if(password !== confirmPassword){
            alert('passwords don\'t match');
            return;
        }
        try {
            // really cool piece of code and function from firebase auth library
            //creates user and writes to db from a passed email and password string
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            // add user to db
            //display name added as object to be spread es6 syntax
            await createUserProfileDocument(user, { displayName });
            // clear out form
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch(error) {
            console.error(error);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;
        //dynamically set key of object
        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
        <div className='sign-up'>
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label="Display Name"
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label="Email"
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label="Password"
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label="Confirm Password"
                    required
                />
                <CustomButton
                    type='submit'
                    onClick={() => {alert('yay!')}}
                >
                    SIGN UP
                </CustomButton>
            </form>
        </div>
        );
    }
}