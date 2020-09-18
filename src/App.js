import React, {Component} from 'react';
import Header from './Header';
import './App.css'
//This Header refers to const Header in function, then ./Header means ./Header.js

/*class App extends Component{
    render() {
        //let x = 5;
        //let y = 9;
        return (
            React.createElement("div", {className: "container"},
                React.createElement("p", {style: {color: "#aaa"} }, "Welcome User!"),
                React.createElement("hr"), // Line 3
                React.createElement("div"),
                React.createElement("input", {type: "text"}, "Please type your name here"), // Line 4
            )
            /*<div>
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
       /* );
        //return React.createElement("h1", null, "Welcome to React");
        //return React.createElement("div", null, "Hi");
    }
} */

class App extends Component{

    render() {

        let subscribers = [
            {
                id: 1,
                name: "Shilpa Bhat",
                phone: "1234567890"
            },
            {
                id: 2,
                name: "ShRISHTI Bhat",
                phone: "167890"
            },
            {
                id:3,
                name: "Sameer Bhat",
                phone: "1237890"
            }
        ]
        return (
            <div>
                <Header />
                <div className="component-body-container">
                    <button className="custom-btn add-btn">Add</button>

                    <div className="grid-container heading-container">
                        <span className="grid-item name-heading">Name</span>
                        <span className="grid-item phone-heading">Phone</span>
                    </div>

                    {
                        subscribers.map(sub =>{
                            return <div key={sub.id} className="grid-container">
                                <span className="grid-item">{sub.name}</span>
                                <span className="grid-item">{sub.phone}</span>
                                <span className="custom-btn delete-btn">Delete</span>
                            </div>
                            }
                        )
                    }

                    {/*<div className="grid-container ">
                        <span className="grid-item ">Shilpa</span>
                        <span className="grid-item ">1233</span>
                    </div>

                    <div className="grid-container ">
                        <span className="grid-item ">Shrishti</span>
                        <span className="grid-item ">3445</span>
                    </div> */ }

               </div>
            </div>
        );

    }
}

export default App;
