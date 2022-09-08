import React, { useState } from 'react'

interface IProps {
    categoriesValue: string[]
}

const Categories: React.FC<IProps> = ({categoriesValue}) => {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)

    return (
        <div className='home-page__categories'>
            <ul>
                {categoriesValue.map((e, i) => <li key={e} className={`home-page__category ${i === activeCategoryIndex && 'active'}`} onClick={() => setActiveCategoryIndex(i)}>{e}</li>)}
            </ul>
        </div>
    )
}

export default Categories
