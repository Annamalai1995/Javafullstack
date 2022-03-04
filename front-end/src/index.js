import React from 'react'
import ReactDOM from 'react-dom'
import App, { Hello } from './App'
import Hey, { Place, Travel } from './ooty'
//render("what to show","where to show")
ReactDOM.render(
  <>  
  <App/>
  <Hello/>
  <Hey/>
  <Place/>
  <Travel/>
  </>
    ,document.getElementById("root")    
)