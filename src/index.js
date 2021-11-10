import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './styles/index.scss'
import Tokyo, { CoffeeBar, CoffeeBar2, CoffeeBar3 } from './App';
import { EdButton } from './components/Button';
import Todo from './Todo';


ReactDOM.render(
  <React.StrictMode>
    {/* <CoffeeBar/> */}
    <EdButton/>
    <Todo/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
