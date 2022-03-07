import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Cocktails from './Cocktails';
import Mocktails from './Mocktails';
import Liqueurs from './Liqueurs';

const Root = () => {
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<App/>} />
          <Route exact path='/Cocktails' element={<Cocktails/>} />
          <Route exact path='/Mocktails' element={<Mocktails/>} />
          <Route exact path='/Liqueurs' element={<Liqueurs/>} />
        </Routes>
      </Router>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
