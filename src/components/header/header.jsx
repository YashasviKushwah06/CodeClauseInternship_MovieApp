import React, { useState } from 'react'
import './header.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/FlicksLogo.png' 
import { FaSearch } from "react-icons/fa";

const Header = () => {

  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
        navigate(`/search/${searchQuery}`)
    }
}

  return (
    <div className='header'>
        <div className='headerLeft'>
            <Link to='/'><img className='header_icon' src={logo}/></Link>
            <h3 className='Logo'>Flicks</h3>
            <Link to='/movies/popular'><span>Popular</span></Link>
            <Link to='/movies/top_rated'><span>Top Rated</span></Link>
            <Link to='/movies/upcoming'><span>Upcoming</span></Link>
        </div>
        <div className='headerRight'>
            <form onSubmit={handleSearch}>
              <input
                  type="text"
                  placeholder="Search for movies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)} />
              <button type="submit"><FaSearch /></button>
            </form>
          </div>
    </div>
  );
}

export default Header