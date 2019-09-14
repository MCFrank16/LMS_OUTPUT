import React, { Component } from 'react';
import haven from '../api/haven';
import { Redirect } from 'react-router-dom'; 

class Login extends Component {
    constructor(){
        super();
        this.state={
            email:'alain1@gmail.com',
            password:'password23423',
            redirect: false
        }
    }

    onSubmit = () => {
      const body = { email: this.state.email, password: this.state.password }  
      haven.post('/login', body).then((res) => {
          this.setState({ redirect : true })
      }).catch(() => {
          return null;
      });
      
    }
    render() {
        if(this.state.redirect){
            return <Redirect to="/search" />
        }
        return (
            <div className="login-form">
                <h3 className="login-title">Press Login</h3>
                <form className="ui form">
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="email" value={this.state.email} onChange={({target})=>this.setState({email:target.value})} />
                    </div>

                    <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="password" value={this.state.password} onChange={({target})=>this.setState({password:target.value})} />
                    </div>

                    <div className="field">
                        <div className="ui checkbox">
                            <input type="checkbox" tabIndex="0" />
                            <label>I agree to the Terms and Conditions</label>
                        </div>

                    </div>

                    <button className="ui button" type="button" onClick={this.onSubmit}>Login</button>

                </form>
            </div>
        )
    }
}

export default Login;
