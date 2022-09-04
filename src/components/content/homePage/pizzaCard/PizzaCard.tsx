import React from 'react'
import SvgSelector from '../../../../SvgSelectors/SvgSelector'

const PizzaCard = () => {
    return (
        <div className='home-page__pizza-card pizza-card'>
            <img className='pizza-card__image' src='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg' alt='Pizza' />
            <h4 className='pizza-card__title'>Чизбургер-пицца</h4>
            <div className='pizza-card__selector'>
                <ul>
                    <li className='pizza-card__selector-item active'>тонкое</li>
                    <li className='pizza-card__selector-item'>традиционное</li>
                </ul>
                <ul className='pizza-card__selectors'> 
                    <li className='pizza-card__selector-item active'>26 см.</li>
                    <li className='pizza-card__selector-item'>30 см.</li>
                    <li className='pizza-card__selector-item'>40 см.</li>
                </ul>
            </div>
            <div className='pizza-card__bottom'>
                <div className='pizza-card__price'>от 395 ₽</div>
                <button className='pizza-card__button button button--outline button--add'>
                    <SvgSelector name='buy-icon' />
                    <span className='pizza-card-text'>Добавить</span>
                    <i className='pizza-card-quantity'>2</i>
                </button>
            </div>
        </div>
    )
}

export default PizzaCard
