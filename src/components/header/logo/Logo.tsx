import React from 'react'
import SvgSelector from '../../../SvgSelectors/SvgSelector'

const Logo = () => {
    return (
        <div className='header__logo'>
            <SvgSelector name='pizza-logo' />
            <div className='header__logo-text'>
                <h1 className='header__logo-title'>REACT PIZZA</h1>
                <p className='header__logo-subtitle'>самая вкусная пицца во вселенной</p>
            </div>
        </div>
    )
}

export default Logo
