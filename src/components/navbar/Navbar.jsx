import React, { useContext } from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';
import { DarkModeContext } from "../../context/darkModeContext";


const Navbar = () => {

  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='search...'/><SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className='icon'/> English
          </div>
          <div className="item">
            <DarkModeIcon className='icon' onClick={()=> dispatch({type:"TOGGLE"})}/>
          </div>
          <div className="item">
            <FullscreenExitIcon className='icon'/> 
          </div>
          <div className="item">
            <NotificationsNoneIcon className='icon'/> 
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className='icon'/> 
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListIcon/> 
          </div>
          <div className="item">
            <img className='avatar' src='https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=''/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar