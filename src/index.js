import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import RegisterServiceWorker from './RegisterServiceWorker.js';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter.jsx';

const element = <h1>Hello World, Welcome To React JS Tutorial</h1>;
ReactDOM.render(<Counter/>,document.getElementById('root'));
console.log(element);