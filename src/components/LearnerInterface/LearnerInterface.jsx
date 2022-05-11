import React from "react";
import CodeEditor from '../CodeEditor/CodeEditor.jsx';
import Browser from '../Browser/Browser.jsx'
import FlexTutorial from '../Instructions/FlexTutorial.jsx'
import GridTutorial from '../Instructions/GridTutorial'

class LearnerInterface extends React.Component {

    render() {   

    /**
     * using fetch to check the db for which tutorial to display
     * corrosponding tutorial will be showed on render
     */
        function Tutorial() {
            var tutorialType;
            fetch("https://api.airtable.com/v0/appvUkYfYyf0YpQUD/Table%201?api_key=keyzpKdKzXgaZVthy")
            .then((res) => res.json())
            .then((data) => {
                tutorialType = data.records[0].fields.tutorialType;  
                // return tutorialType
                console.log(tutorialType);
            });
    
            if(tutorialType === 'grid') {
                return <GridTutorial />
            } else if(tutorialType === 'flex') {
                return <FlexTutorial />
            } else {
                return <div id='tutorialError'><h1>Error, please contact a tutor</h1></div>
            }
        }
    
        return (
            <div id='appContainer'>
                <div id='instructionComponent'>
                    <Tutorial />
                </div>
        
                <div id='codeEditorComponent'>
                    <CodeEditor />
                </div>
            
                <div id='browserComponent'>
                    <Browser />
                </div>
            </div>  
        )



            // if(tutorialType === 'flex') {
            //     return ( 
            //         <div id='appContainer'>
            //             <div id='instructionComponent'>
            //                 <FlexTutorial />
            //             </div>
                
            //             <div id='codeEditorComponent'>
            //                 <CodeEditor />
            //             </div>
                    
            //             <div id='browserComponent'>
            //                 <Browser />
            //             </div>
            //         </div>  
            //     )
            // } else if(tutorialType === 'grid') {
            //     return ( 
            //     <div id='appContainer'>
            //         <div id='instructionComponent'>
            //             <GridTutorial />
            //         </div>
            
            //         <div id='codeEditorComponent'>
            //             <CodeEditor />
            //         </div>
                
            //         <div id='browserComponent'>
            //             <Browser />
            //         </div>
            //     </div>  
            //     )
            // } else {
            //     <h1>Error please contact a tutor</h1>
            // }
    }     
}

export default LearnerInterface;
