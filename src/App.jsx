import React from 'react';
import './App.css';
import CodeEditor from './components/CodeEditor/CodeEditor.jsx';
import Browser from './components/Browser/Browser.jsx'
import Tutorial from './components/Instructions/Tutorial.jsx'
import InstructionsGrid from './components/Instructions/InstructionsGrid';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login/Login';
import LearnerInterface from './components/LearnerInterface/LearnerInterface';

// import Toggle from './components/Login/Toggle';

function App() {
//conditionally rendering a component depending on the tutor selection
return(
  <div>
    {/* <Login /> */}
    <Router>
              <p>
              <Link to="/login">Login</Link>
              </p>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </Router>
    <LearnerInterface />
  </div>
)



//   function renderTutorial() {
//     var tutorialType;
//     fetch("https://api.airtable.com/v0/appvUkYfYyf0YpQUD/Table%201?api_key=keyzpKdKzXgaZVthy")
//     .then((res) => res.json())
//     .then((data) => {
//     // setRecipes(data.records);
//       tutorialType = data.records[0].fields.tutorialType;  
//       if(tutorialType === 'flex') {
//           // console.log('Flex Tutorial') 
//           // newTutorial(tutorialType)
//           return  <Tutorial />

//           } else if(tutorialType === 'grid') {
//           // console.log('Grid Tutorial') 
//           return  <InstructionsGrid />
//           // newTutorial(tutorialType)
//           }
//       })
//     .catch((error) => {
//       console.log(error);
//     });
//   }
  
  
//   return ( 

//   <div>
//   <Router>
//     <p>
//     <Link to="/login">Login</Link>
//     </p>
//   <Switch>
//     <Route path="/login">
//       <Login />
//     </Route>
//   </Switch>
// </Router>

//   <div id='appContainer'>
//     {/* <Link to="/Login">Admin</Link> */}
//       <div id='instructionComponent'>
//       {renderTutorial}
//       {(tutorialType) => {
//         if(tutorialType === 'flex' || 'grid') {
//         return <Tutorial />
//       }
//     }}
//   </div>

//     <div id='codeEditorComponent'>
//       <CodeEditor />
//     </div>

//     <div id='browserComponent'>
//       <Browser />
//     </div>
//   </div>


//     {/* <Login /> */}
//     {/* <Toggle /> */}
//   </div>



//   );
}



export default App;

