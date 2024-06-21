import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NavBar />
    <main className="text-white">
      <About />
      <Projects />
    </main>
  </React.StrictMode>
);