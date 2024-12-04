import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Menu from './components/Menu/Menu.tsx'
import Title from './components/Title/Title.tsx'
import Search from './components/Search/Search.tsx'
import Transactions from './components/Transactions/Transactions.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <table>
      <tr>
        <td><Title/></td>
        <td><Menu/></td>
      </tr>
      <tr>
        <td><Search/></td>
      </tr>
      <tr><Transactions/></tr>
    </table>
    {/* <Title></Title><Menu/> */}
    {/* <App /> */}
  </React.StrictMode>,
)
