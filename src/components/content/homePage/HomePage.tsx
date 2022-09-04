import React from 'react'
import Categories from './categories/Categories'
import PizzaCard from './pizzaCard/PizzaCard'
import Sort from './sort/Sort'
import './homePage.css'

const HomePage = () => {
    return (
        <div className='home-page'>
            <div className='container'>
                <nav className='home-page__navigation'>
                    <Categories />
                    <Sort />
                </nav>
                <h2 className='home-page__title'>Все пиццы</h2>
                <div className='home-page__pizza-cards'>
                    <PizzaCard />
                    <PizzaCard />
                    <PizzaCard />
                    <PizzaCard />
                    <PizzaCard />
                </div>
            </div>
        </div>
    )
}

export default HomePage
