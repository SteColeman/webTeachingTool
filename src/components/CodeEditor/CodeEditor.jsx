import React from "react";
import './CodeEditor.css'

class CodeEditor extends React.Component {

    /**
     * displaying the code editor component. hardcoded maximum of 25 lines in this iteration of development
     * class name is used to indicate to a user what naming conventions they should try to follow. 
     */

    render() {

        return(
            <div id='editorRoot'>

                <div id='fileBanner'>
                    <div className='file'>
                        index.html
                    </div>
                </div>

                <div id='editorSection'>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                        <li>11</li>
                        <li>12</li>
                        <li>13</li>
                        <li>14</li>
                        <li>15</li>
                        <li>16</li>
                        <li>17</li>
                        <li>18</li>
                        <li>19</li>
                        <li>20</li>
                        <li>21</li>
                        <li>22</li>
                        <li>23</li>
                        <li>24</li>
                        <li>25</li>
                    </ul>
                    <textarea id='userInput' placeholder="Write your HTML here!" rows='26' />

                </div>

            </div>
        )
    }


}

export default CodeEditor