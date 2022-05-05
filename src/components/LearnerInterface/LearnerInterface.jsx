import React from "react";
import CodeEditor from '../CodeEditor/CodeEditor.jsx';
import Browser from '../Browser/Browser.jsx'
import Tutorial from '../Instructions/Tutorial.jsx'
import InstructionsGrid from '../Instructions/InstructionsGrid';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from '../Login/Login.jsx';
// import { render } from "@testing-library/react";


class LearnerInterface extends React.Component {
    
render() {
    function renderTutorial() {

        var tutorialType;
        fetch("https://api.airtable.com/v0/appvUkYfYyf0YpQUD/Table%201?api_key=keyzpKdKzXgaZVthy")
        .then((res) => res.json())
        .then((data) => {
        // setRecipes(data.records);
          tutorialType = data.records[0].fields.tutorialType;  
          if(tutorialType === 'flex') {
              // console.log('Flex Tutorial') 
              // newTutorial(tutorialType)
              return  <Tutorial />
    
              } else if(tutorialType === 'grid') {
              // console.log('Grid Tutorial') 
              return  <InstructionsGrid />
              // newTutorial(tutorialType)
              }
          })
        .catch((error) => {
          console.log(error);
        });
      }
        return ( 

          
            <div id='appContainer'>
              {/* <Link to="/Login">Admin</Link> */}
                <div id='instructionComponent'>
                {renderTutorial}
                {(tutorialType) => {
                  if(tutorialType === 'flex' || 'grid') {
                  return <Tutorial />
                }
              }}
            </div>
          
              <div id='codeEditorComponent'>
                <CodeEditor />
              </div>
          
              <div id='browserComponent'>
                <Browser />
              </div>
            </div>

          
          
          
            );
    
}



}

export default LearnerInterface;