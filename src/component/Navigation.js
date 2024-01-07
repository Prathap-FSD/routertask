import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';
import All from './All';
import FullStack from './FullStack';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';
import Career from './Career';

function Navigation() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <div className='container'>
        <div className='row'>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse col-md-12 d-flex justify-content-evenly" id="navbarNav">
          <ul className="navbar-nav ">
            <li className='nav-item me-5'><NavLink className='nav-link' to='/'>All</NavLink></li>
            <li className='nav-item me-5'><NavLink className='nav-link' to='/FullStack'>Full Stack Development</NavLink></li>
            <li className='nav-item me-5'><NavLink className='nav-link' to='/DataScience'>Data Science</NavLink></li>
            <li className='nav-item me-5'><NavLink className='nav-link' to='/CyberSecurity'>Cyber Security</NavLink></li>
            <li className='nav-item me-5'><NavLink className='nav-link' to='/Career'>Career</NavLink></li>
          </ul>
        </div>
        </div>
        </div>
      </div>
    </nav>

    <Routes>
      <Route path="/" element={<All/>} />
      <Route path="/FullStack" element={<FullStack/>} />
      <Route path="/DataScience" element={<DataScience/>} />
      <Route path="/CyberSecurity" element={<CyberSecurity/>} />
      <Route path="/Career" element={<Career/>} />
    </Routes>
    </div>
  )
}

export default Navigation