import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root')!);
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  const myp2: React.ReactElement = React.createElement('p', null, 'This is paragraph 2');

  const myButton: React.ReactElement = React.createElement('button', {className: "myButton"}, 'This is the button')

  const myp1: React.ReactElement = React.createElement('p', null, 'This is paragraph 1')

  const myList: React.ReactElement = React.createElement('ul', null, [
    React.createElement('li', null, 'this is one'),
    React.createElement('li', null, 'this is two'),
    React.createElement('li', null, 'this is three')
  ])

  const myDiv: React.ReactElement = React.createElement('div', null, 'This is the div', myp1, myp2, myButton, myList)

 
root.render(myDiv)

