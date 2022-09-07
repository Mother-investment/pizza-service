import React, { useState } from 'react'
import { ISortOption } from '../../../../models/IPizza'
import SvgSelector from '../../../../SvgSelectors/SvgSelector'

const Sort: React.FC<ISortOption[]> = (props) => {
    const [visibility, setVisibility] = useState(false)


    return (
        <div className='home-page__sort'>
            <div className='home-page__sort-label'>
                <SvgSelector name='sort-icon' />
                <b>Сортировка по:</b>
                <span onClick={() => {setVisibility(!visibility)}}>популярности</span>
            </div>
            {visibility && (
                <div className='home-page__sort-popup sort-popup'>
                    <ul>
                        <li className='sort-popup__item active'>{props[0].name}</li>
                        <li className='sort-popup__item'>{props[1].name}</li>
                        <li className='sort-popup__item'>{props[2].name}</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Sort
