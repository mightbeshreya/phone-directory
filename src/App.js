import React, {Component} from 'react';
import Header from './Header';
//This Header refers to const Header in function, then ./Header means ./Header.js

/*class App extends Component{
    render() {
        //let x = 5;
        //let y = 9;
        return (
            <div>
                {/*<div className="header">
                   Phone Directory
               </div>*///}
               /*<Header/>
               <button> Add </button>
               <div>
                   <span> Name </span><br/>
                   <span> Phone </span>
               </div>
                {/*<label htmlFor="name"> Name: </label>
               <input id="name" type="text" placeholder="Type Here" defaultValue={x+y}/> *///}
            /*</div>
            /*<div id="module">
                <p>ReactJS</p>
            </div>

            /*React.createElement("div", {id:"module"},
                    React.createElement("p", null, "ReactJS")
            )*/
          /*  <h1>Welcome To React</h1>
            <div>Hi</div> */
        //);
        //return React.createElement("h1", null, "Welcome to React");
        //return React.createElement("div", null, "Hi");
    /*}
}*/

class App extends Component{
    render() {
        return (
            <div>
                <Header/>
                <button> Add </button>
                <div>
                    <span> Name </span><br/>
                    <span> Phone </span>
                </div>
            </div>
        );
    }
}

export default App;
