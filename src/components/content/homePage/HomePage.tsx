import React from 'react'
import Categories from './categories/Categories'
import Sort from './sort/Sort'
import './homePage.css'
import PizzasList from './pizzasList/PizzasList'
import { ISortOption } from '../../../models/IPizza'


const HomePage: React.FC = () => {
    const sortOptions: ISortOption[] = [{value: 'rating', name: 'популярности'}, {value: 'price', name: 'цене'}, {value: 'title', name: 'алфавиту'}]
    
    return (
        <div className='home-page'>
            <div className='container'>
                <nav className='home-page__navigation'>
                    <Categories />
                    <Sort {...sortOptions} />
                </nav>
                <h2 className='home-page__title'>Все пиццы</h2>
                <PizzasList />
            </div>
        </div>
    )
}

export default HomePage
