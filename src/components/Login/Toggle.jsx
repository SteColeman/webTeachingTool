import React from "react";

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyzpKdKzXgaZVthy'}).base('appvUkYfYyf0YpQUD');

class Toggle extends React.Component {

    render() {
        var tutorialSelector = (data) => {
            /**
             * airtable update code taken from airtable api website and modified 
             * 
             * the tutorialType field is updated using the data variable wrapped around 'flex' or 'grid' strings that will be updated in the database.
             * 
             * the app component checks this db entry to then render either flex or grid tutorial instructions
             */
            base('Table 1').update([
                {
                    "id": "recjBu8y1c5LkO3VT",
                    "fields": {
                    "Name": "tutorialSettings",
                    "tutorialType": data
                    }
                }], 
                function(err) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    alert('The application is now displaying the "' + data + '" tutorial')
                    window.location.reload()
                }
            );
                /**
                 * end airtable code.
                 */
        }

        return (
            <div>
                <h1>Admin CSS Switcher</h1>
            <input value='flex' type="checkbox" onClick={() => tutorialSelector('flex')} /> Flex CSS Tutorial
            <input value='grid' type="checkbox" onClick={() => tutorialSelector('grid')} /> Grid CSS Tutorial

            </div>
        )
    }

}

export default Toggle



