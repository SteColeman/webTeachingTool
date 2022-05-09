import React from "react";
import DOMPurify from 'dompurify';

class Browser extends React.Component {

    /**
    * on button click refreshes the Browser component only to render user input
    * once reloaded the state is reset ready for the next time reload is called
    */
    constructor(props) {
        super(props);
        this.state = {reload: false};
    }

    updateBrowser() {
        this.setState(
        {reload: true},
        () => this.setState({reload: false})
        )
        
    }

    render() {
        /**
         * grabbing the inner html of the code editor ready for renderin into the browser
         * domPurify is used to 'sanitize' the code and prevent any cross site scripting attacks from occuring
         * try/catch added as the first time the app renders the value is null and crashes the app
         */

        var userInput;

        try{ 
            if(document.getElementById('userInput').value !== null){
                userInput = DOMPurify.sanitize(document.getElementById('userInput').value)
            } 
        } 
        catch(e){
            //this will be logged everytime the app is loaded/refreshed
            console.log('userInput == null');
        }
        
        return(
            <div>
                 <button onClick={() => {this.updateBrowser()}}>Save</button>
                <div id='browserRoot' contentEditable='true' dangerouslySetInnerHTML={{__html: userInput}} />
            </div>
        )
    }
}

export default Browser