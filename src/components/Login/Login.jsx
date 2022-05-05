import React from "react";
import Toggle from './Toggle.jsx'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {LoggedIn: false};
        this.checkPassword = this.checkPassword.bind(this);
    }

    //refreshes the Browser component only to render user input
    checkPassword()  {
        if(document.getElementById('Password').value !== 'admin') {
            alert('INCORRECT PASSWORD')
            // this.setState(
            //     {reload: true},
            //     () => this.setState({reload: false})
            //     )
        } else {
            this.setState(
                {LoggedIn:true}
            )
        }
    }

    render() {

        if(this.state.LoggedIn) {
            return (
                <Toggle />
            )
        } else {
            return (
                <div className='loginHeader'>
                <h2>Edge Hill Teaching Environment Admin</h2>


                <input type="password" placeholder="Password" id='Password' /> 
                    <button onClick={this.checkPassword}>Login</button>
        
                </div>
            
            );
        
        }



    }

}

//     constructor(props) {
//         super(props);
//         this.state = {reload: false};
//         this.checkPassword = this.checkPassword.bind(this);
//     }

//                     //refreshes the Browser component only to render user input
//                     checkPassword()  {
//                         if(document.getElementById('Password').value !== 'admin') {
//                             alert('INCORRECT PASSWORD')
//                             this.setState(
//                                 {reload: true},
//                                 () => this.setState({reload: false})
//                                 )
//                         } else {
                            

//                             // ReactDOM.render(Toggle , root)
//                             // console.log('correct password');   

                                
//                         }
                        
//                     }


//         render() {


//             return (
//                 <div className='loginHeader'>
//                 <h2>Edge Hill Teaching Environment Admin</h2>


//                 <input type="text" placeholder="Password" id='Password' /> 
//                  <button onClick={this.checkPassword}>Login</button>
        
//                 </div>
            
//           );
        
//         }

//}



export default Login;