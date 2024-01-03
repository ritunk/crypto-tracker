import React from 'react'
import '../components/Header.css'
import { Link } from 'react-router-dom'
import { FaEthereum } from "react-icons/fa";


const Header = () => {
  return (
    <div className='navbar'>
    <div className='logo'>
        <h1>CryptoTracker</h1>
        <FaEthereum color='yellow' size={"30"}/>

    </div>
      <ul>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/coins'>Coins</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header