import React, { useContext } from 'react'
import './Navbar.css'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const { setCurrency } = useContext(CoinContext)

    const currencyHandler = (event) => {
        switch (event.target.value) {
            case "usd": {
                setCurrency({ name: "usd", symbol: "$" });
                break;
            }
            case "euro": {
                setCurrency({ name: "euro", symbol: "€" })
                break;
            }
            case "inr": {
                setCurrency({ name: "inr", symbol: "₹" })
                break;
            }
            default: {
                setCurrency({ name: "usd", symbol: "$" })
                break;
            }

        }
    }
    return (
        <div>
            <div className="navbar">
                <Link to={'/'}>
                    <img src="https://yt3.googleusercontent.com/QAp7ArEFVNS_mvhDDXwz9VSygSFVET0-UQ6hEsGbagVA8qvMNQIMOe8NwJQM9BeDgkJZdMf6TQ=s900-c-k-c0x00ffffff-no-rj" alt="logo" className='logo' />
                </Link>
                <h1 className='head'>
                    Cryptify
                    <span className='tail'>Track</span>
                </h1>
                <ul>
                    <Link to={'/'}>
                        <li>Home</li>
                    </Link>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>
                <div className="nav-right">
                    <select onChange={currencyHandler}>
                        <option value="usd">USD</option>
                        <option value="eur">EURO</option>
                        <option value="inr">INR</option>
                    </select>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
