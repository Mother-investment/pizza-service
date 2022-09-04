import React from 'react'

const Categories = () => {
    return (
        <div className='home-page__categories'>
            <ul>
                <li className='home-page__category active'>Все</li>
                <li className='home-page__category'>Мясные</li>
                <li className='home-page__category'>Вегетарианская</li>
                <li className='home-page__category'>Гриль</li>
                <li className='home-page__category'>Острые</li>
                <li className='home-page__category'>Закрытые</li>
            </ul>
        </div>
    )
}

export default Categories
