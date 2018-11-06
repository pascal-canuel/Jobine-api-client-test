import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from "jquery";

class App extends Component {
  constructor() {
    super();
    this.jobineAPI();
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

  jobineAPI() {
// done add netbeans cross-origin platform to call api from localhost/running machine and always send json 
// api call different method

/* method 1 to fetch json
var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
          console.log(xhr.response);
      } else {
        
      }
    };
    xhr.send();
};

getJSON('http://localhost:51617/JobineDB/webresources/entities.usertype');
getJSON('http://localhost:51617/JobineDB/webresources/entities.msg');
getJSON('http://localhost:51617/JobineDB/webresources/entities.user');
getJSON('http://localhost:51617/JobineDB/webresources/entities.offer'); 
*/

$.getJSON("http://localhost:51617/JobineDB/webresources/entities.usertype", function(result){
  $.each(result, function(i, field){
    console.log(field);
  })
});

/*
$.post({
  headers: { 
    'Accept': 'application/json',
    'Content-Type': 'application/json' 
},
  url: "http://localhost:51617/JobineDB/webresources/entities.usertype",
  data: JSON.stringify({ nameUserType: "donal duck" }),
  success: function(msg){
    console.log( "Data Saved: " + msg );
  }
});
*/
fetch("http://localhost:51617/JobineDB/webresources/entities.usertype")
.then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
    console.log(data);
  }) 
    
  }
}

export default App;
