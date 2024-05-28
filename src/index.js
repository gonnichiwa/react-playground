import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Test, Style, CssTest} from './fundamental/Fundamental';
import MyComponent  from './MyComponent';
import ArrowComponent from './ArrowComponent';
import PropTypeCheck from './PropTypeCheck';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import EventPracticeFun from './EventPracticeFun';
import ValidationSample from './Validationsample';
import ScrolllBoxApp from './ScrollBoxApp';

import IterationSample from './IterationSample';

import reportWebVitals from './reportWebVitals';
import LifeCycleSampleApp from './LifeCycleSampleApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Test />
    <Style/>
    <CssTest/>
    <MyComponent name={3}/>
    <ArrowComponent name="ArrowComponent : name From super">index.js의 ArrowComponent태그 사이에 주어짐.(children)</ArrowComponent>
    <PropTypeCheck name={"3"}>PropTypeCheckChildren</PropTypeCheck> {/* name attr proptype check */}
    <Counter/>
    <Say/>
    <EventPractice/>
    <EventPracticeFun />
    <ValidationSample/>
    <ScrolllBoxApp/>
    <div style={{height: '100px'}}></div>

    <IterationSample/>
    <LifeCycleSampleApp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
