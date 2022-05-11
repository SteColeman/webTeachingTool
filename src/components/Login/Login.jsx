import React from "react";
import Toggle from './Toggle.jsx'
import './Login.css'

class Login extends React.Component {

    /**
     * the comoponents 'loggedIn' state is set to 'false' by default
     * if the correct password is entered the state is set to true and the 'toggle' component is rendered
     * if the password is wrong an alert will pop up notifying the user
     */

    constructor(props) {
        super(props);
        this.state = {LoggedIn: false};
        this.checkPassword = this.checkPassword.bind(this);
    }

    
    checkPassword()  {
        if(document.getElementById('Password').value !== 'admin') {
            alert('INCORRECT PASSWORD')

        } else {
            this.setState({LoggedIn:true})
        }
    }

    render() {
        if(this.state.LoggedIn) {
            return (<Toggle />)

        } else {
            return (
                <div id='loginScreen'>

                    <div class='loginContent'>
                        <h2>Edge Hill Teaching Environment Admin</h2>

                        <input type="password" placeholder="Password" id='Password' /> 
                        <p> 
                            <button onClick={this.checkPassword}>Login</button>
                        </p>        
                    </div>
                </div>
            );
        }
    }
}

export default Login;