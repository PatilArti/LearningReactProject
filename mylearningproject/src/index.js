import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const element =React.createElement('h1', { style: { color: "red" } },
React.createElement('p',{style:{color:"blue"}},'first paragraph'),
React.createElement('p',{style:{backgroundColor:"pink", color:"yellow"}},'second paragraph'),
React.createElement('p',{style:{backgroundColor:"yellow"}},'Hello World'));
root.render(
    element
  // <React.StrictMode>
  //   <App />
  
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
