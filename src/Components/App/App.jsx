// App.js
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './App.css'
import startTodoKanbanData from '../../../public/data/startData'
import Welcome from '../Welcome/Welcome'
import Instructions from '../Instructions/Instructions'
import CardContainer from '../CardContainer/CardContainer'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <Router>
      <div className="app-container">
        <nav className={`menu ${menuOpen ? 'open' : ''}`}>
          <button className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <ul>
            <li><Link to="/" onClick={toggleMenu}>Welcome</Link></li>
            <li><Link to="/instructions" onClick={toggleMenu}>Instructions</Link></li>
            <li><Link to="/kanban" onClick={toggleMenu}>Kanban Board</Link></li>
          </ul>
        </nav>
        
        <div className="content">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/instructions" element={<Instructions />} />
            <Route path="/kanban" element={<CardContainer kanbanData={startTodoKanbanData} />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
