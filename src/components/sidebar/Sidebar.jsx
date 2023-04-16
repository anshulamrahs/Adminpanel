import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person3Icon from '@mui/icons-material/Person3';
import InventoryIcon from '@mui/icons-material/Inventory';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import MopedIcon from '@mui/icons-material/Moped';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {

    const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='sidebar'>
        <div className="top">
            <Link to={"/"} style={{textDecoration: "none"}}>
            <span className="logo">Waveyhigh</span>
            </Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className='title'>MAIN</p>
                <li>
                   <DashboardIcon className="icon"/>
                   <span className="dashboard">Dashboard</span>
                </li>
                <p className='title'>LISTS</p>
                <Link to={"/users"} style={{textDecoration: "none"}}>
                <li>
                    <Person3Icon className="icon"/>
                    <span>Users</span>
                </li>
                </Link>
                <Link to={"/products"} style={{textDecoration: "none"}}>
                <li>
                    <InventoryIcon className="icon"/>
                    <span>Products</span>
                </li>

                </Link>
                <li>
                    <WorkOutlineIcon className="icon"/>
                    <span>Orders</span>
                </li>
                <li>
                    <MopedIcon className="icon"/>
                    <span>Delivery</span>
                </li>
                <p className='title'>USEFUL LINKS</p>
                <li>
                    <SsidChartIcon className="icon"/>
                    <span>Stats</span>
                </li>
                <li>
                    <CircleNotificationsIcon className="icon"/>
                    <span>Notifications</span>
                </li>
                <p className='title'>SERVICE</p>
                <li>
                    <SettingsSystemDaydreamIcon className="icon"/>
                    <span>System Health</span>
                </li>
                <li>
                    <LogoDevIcon className="icon"/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsApplicationsIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <p className='title'>USER</p>
                <li>
                    <PersonIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOptions"  onClick={() => dispatch({ type: "LIGHT" })}></div>
            <div className="colorOptions"  onClick={() => dispatch({ type: "DARK" })}></div>
        </div>
    </div>
  )
}

export default Sidebar