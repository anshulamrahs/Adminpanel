import React from 'react'
import './sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">Waveyhigh</span>
        </div>
        <div className="center">
            <ul>
                <li>
                    <span className="dashboard">dashboard</span>
                </li>
                <li>
                    <span className="dashboard">dashboard</span>
                </li>
                <li>
                    <span className="dashboard">dashboard</span>
                </li>
                <li>
                    <span className="dashboard">dashboard</span>
                </li>
            </ul>
        </div>
        <div className="bottom">color options</div>
    </div>
  )
}

export default Sidebar