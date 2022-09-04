import React from 'react'
import ButtonCart from './buttonCart/ButtonCart'
import './header.css'
import Logo from './logo/Logo'

const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
                <Logo />
                <ButtonCart />
            </div>
        </div>
    )
}

export default Header
