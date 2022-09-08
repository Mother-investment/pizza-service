import React from 'react'
import { Link } from 'react-router-dom'
import SvgSelector from '../../../SvgSelectors/SvgSelector'

const Logo = () => {
    return (
        <Link to='/'>
            <div className='header__logo'>
                <SvgSelector name='pizza-logo' />
                <div className='header__logo-text'>
                    <h1 className='header__logo-title'>REACT PIZZA</h1>
                    <p className='header__logo-subtitle'>самая вкусная пицца во вселенной</p>
                </div>
            </div>
        </Link>
    )
}

export default Logo
