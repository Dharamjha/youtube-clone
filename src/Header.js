import React, { useState } from 'react'
import './Header.css';
import { Menu } from 'lucide-react';
import { Search } from 'lucide-react';
import { Video } from 'lucide-react';
import { LayoutGrid } from 'lucide-react';
import { Bell } from 'lucide-react';
import { Angry } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {

  const [inputSearch, setInputSearch] = useState('');

  return (
    <div className='header'>
      <div className='header_left'>
      <Menu />
      <Link to="/">
      <img className='header__logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEynCGDrFj3BQG1Aff7q4ARbWM0s7FK8jfng&s' alt=''/>

      </Link>
      </div>

      <div className='header_input'>
      <input onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} placeholder='Search' type='text'/>

      <Link to={`/search/${inputSearch}`}>
      <Search className="header_inputbuttons" />
      </Link>
      
      </div>
        <div className='header_icons'>
        <Video className='header_icon' />
        <LayoutGrid className='header_icon' />
        <Bell className='header_icon' />
        {/* <img src=''/> */}
        <Angry/>
        </div>
        
        

    </div>
  )
}
