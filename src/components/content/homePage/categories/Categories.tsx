import React, { useState } from 'react'
import { IActiveSortAndCategory, TSetActiveCategory } from '../../../../models/IHomePage'

interface IProps {
    activeSortAndCategory: IActiveSortAndCategory
    setActiveSortAndCategory: (value: React.SetStateAction<IActiveSortAndCategory>) => void
}

const Categories: React.FC<IProps> = ({activeSortAndCategory, setActiveSortAndCategory}) => {
    const categoriesValue: string[] = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
   
    const setActiveCategory: TSetActiveCategory = (value: number) => {
        setActiveSortAndCategory({...activeSortAndCategory, category: value})
    }

    return (
        <div className='home-page__categories'>
            <ul>
                {categoriesValue.map((e, i) => <li key={e} className={`home-page__category ${i === activeSortAndCategory.category && 'active'}`} onClick={() => setActiveCategory(i)}>{e}</li>)}
            </ul>
        </div>
    )
}

export default Categories
