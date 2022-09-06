import React from 'react'
import SvgSelector from '../../../../SvgSelectors/SvgSelector'


const Sort = () => {

    return (
        <div className='home-page__sort'>
            <div className='home-page__sort-label'>
                <SvgSelector name='sort-icon'/>
                <b>Сортировка по:</b>
                <span>популярности</span>
            </div>
            <div className='home-page__sort-popup sort-popup'>
                <ul>
                    <li className='sort-popup__item active'>популярности</li>
                    <li className='sort-popup__item'>цене</li>
                    <li className='sort-popup__item'>алфавиту</li>
                </ul>
            </div>
        </div>
    )
}

export default Sort
