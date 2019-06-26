import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }


    handleLoginInfoUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAdminRegister = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        axios.post('/auth/register', { email, password })
            .then((res) => {
                this.props.history.push('/dashboard')
            })
            .catch((err) => {
                console.log(err)
                window.alert('This email is already being used.');
            })
        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <div className='mainCont'>
                <div className='signupCont'>
                    <h1>Sign up</h1>
                    <form onSubmit={this.handleAdminRegister}>
                        <input type='text' name='email' placeholder='email' value={this.state.email} onChange={this.handleLoginInfoUpdate} />
                        <input type='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleLoginInfoUpdate} />
                        <button>Create Account</button> <br />
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Signup);