import React from 'react';
import ReactDOM from 'react-dom/client';
import Eventdemo from './eventdemo';
import Increment from './increment';
import Decrement from './decrement';
import Lastname from './lastname';
import Firstname from './firstname';
import Double from './double';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
    <Eventdemo value="yuvraj singh" />
    <Eventdemo />
    <Increment />
    <Decrement />
    <Firstname />
    <Lastname />
    <Double />
  </>
);
