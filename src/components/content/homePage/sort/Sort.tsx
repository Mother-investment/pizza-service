import React, { useState } from 'react'
import SvgSelector from '../../../../SvgSelectors/SvgSelector'

interface IProps {
    sortOptions: string[]
}

const Sort: React.FC<IProps> = ({sortOptions}) => {
    const [visibility, setVisibility] = useState(false)
    const [activeIndexOption, setActiveIndexOption] = useState<number>(0)

    return (
        <div className='home-page__sort'>
            <div className='home-page__sort-label'>
                <SvgSelector name='sort-icon' />
                <b>Сортировка по:</b>
                <span onClick={() => {setVisibility(!visibility)}}>{sortOptions[activeIndexOption]}</span>
            </div>
            {visibility && (
                <div className='home-page__sort-popup sort-popup'>
                    <ul>
                        {sortOptions.map((e, i) => <li key={e} className={`sort-popup__item ${i === activeIndexOption && 'active'}`} onClick={() => setActiveIndexOption(i)}>{e}</li>)}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Sort
