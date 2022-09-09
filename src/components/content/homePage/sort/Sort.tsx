import React, { useState } from 'react'
import { IActiveSortAndCategory, ISortOption } from '../../../../models/IHomePage'
import { TSetActiveSort } from '../../../../models/ISortPage'
import SvgSelector from '../../../../SvgSelectors/SvgSelector'

interface IProps {
    activeSortAndCategory: IActiveSortAndCategory
    setActiveSortAndCategory: (value: React.SetStateAction<IActiveSortAndCategory>) => void
}

const Sort: React.FC<IProps> = ({ activeSortAndCategory, setActiveSortAndCategory}) => {
    const sortOptions: ISortOption[]= [{name:'рейтингу', sortProperty:'rating'}, {name:'цене', sortProperty:'price'}, {name:'алфавиту', sortProperty:'title'}]
    const [visibility, setVisibility] = useState(false)
    const activeSortOptionName = sortOptions.find(e => e.sortProperty === activeSortAndCategory.sort)
    const setActiveSort: TSetActiveSort = (value) => {
        setActiveSortAndCategory({...activeSortAndCategory, sort: value})
        setVisibility(false)
    }

    return (
        <div className='home-page__sort'>
            <div className='home-page__sort-label'>
                <SvgSelector name='sort-icon' />
                <b>Сортировка по:</b>
                <span onClick={() => {setVisibility(!visibility)}}>{activeSortOptionName && activeSortOptionName.name}</span>
            </div>
            {visibility && (
                <div className='home-page__sort-popup sort-popup'>
                    <ul>
                        {sortOptions.map((e, i) => <li key={e.sortProperty} className={`sort-popup__item ${e.sortProperty === activeSortAndCategory.sort && 'active'}`} onClick={() => setActiveSort(e.sortProperty)}>{e.name}</li>)}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Sort
