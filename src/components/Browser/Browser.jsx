import React from "react";
import DOMPurify from 'dompurify';

class Browser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {reload: false};
    }

    //refreshes the Browser component only to render user input
    updateBrowser() {
        this.setState(
        {reload: true},
        () => this.setState({reload: false})
        )
        
    }

    render() {

        var userInput;
        //try/catc added as the first time the app renders the value is null and crashes the app
        try{ 
            if(document.getElementById('userInput').value !== null){
                userInput = DOMPurify.sanitize(document.getElementById('userInput').value)
            } 
        } 
        catch(e){
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