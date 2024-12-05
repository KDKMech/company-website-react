import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/NavBar/NavBar'
import Staff from './components/Staff/Staff'
import Main from './components/Main/Main'
import History from './components/History/History'
import PastWork from './components/PastWork/PastWork'
import ContactUs from './components/ContactUs/ContactUs'
import ExternalLinks from './components/ExternalLinks/ExternalLinks'

function App() {
  return (
    <>
    <p>Logo</p>
      <Navbar/>
      <Staff/>
      <History/>
      <Main/>
      <PastWork/>
      <ContactUs/>
      <ExternalLinks/>
    </>
  )


  
}

export default App
