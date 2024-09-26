import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <img src="https://yt3.googleusercontent.com/QAp7ArEFVNS_mvhDDXwz9VSygSFVET0-UQ6hEsGbagVA8qvMNQIMOe8NwJQM9BeDgkJZdMf6TQ=s900-c-k-c0x00ffffff-no-rj" alt="logo" className='logo'/>
                <h1 className='head'>
                Cryptify   
                <span className='tail'>Track</span>
                </h1>
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>
                <div className="nav-right">
                    <select>
                        <option value="usd">USD</option>
                        <option value="eur">EURO</option>
                        <option value="inr">INR</option>
                    </select>
                    <button >Sign up 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
