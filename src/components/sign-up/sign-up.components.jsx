import React from 'react'
import './sign-up.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'


class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName:'',
            email: '',
            password:'',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        const {displayName, email, password, confirmPassword} = this.state
        if (password !== confirmPassword) {
            alert('Please enter your password correctly')
            return
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfileDocument(user,{displayName})

            this.setState({
                displayName:'',
                email: '',
                password:'',
                confirmPassword: ''
            })
        }catch(error){
            console.log(error)
        }
        

    }

    handleChange = event => {
        const {name,value} = event.target
        this.setState({
            [name]:value
        })
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className="sign-up">
                <h2 className="title">I dont have an account</h2>
                <span>sign up with email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput type="text" name="displayName"     value={displayName}     onChange={this.handleChange} label="Display Name" required></FormInput>
                    <FormInput type="text" name="email"           value={email}           onChange={this.handleChange} label="Email" required></FormInput>
                    <FormInput type="text" name="password"        value={password}        onChange={this.handleChange} label="Password" required></FormInput>
                    <FormInput type="text" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label="Confirf Password" required></FormInput>
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}


export default SignUp