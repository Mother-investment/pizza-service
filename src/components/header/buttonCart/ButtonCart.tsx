import React from 'react'
import { Link } from 'react-router-dom'
import SvgSelector from '../../../SvgSelectors/SvgSelector'

const ButtonCart = () => {
    return (
        <Link to='/cart'>
            <div className='header__shoppingCart'>
                <div className='header__shoppingCart-subtotal'>520₽</div>
                <div className='header__shoppingCart-delimiter'></div>
                <SvgSelector name='cart' />
                <span className='header__shoppingCart-quantity'>3</span>
            </div>
        </Link>
    )
}

export default ButtonCart
