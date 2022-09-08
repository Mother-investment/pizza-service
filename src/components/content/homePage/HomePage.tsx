import React from 'react'
import Categories from './categories/Categories'
import Sort from './sort/Sort'
import './homePage.css'
import PizzasList from './pizzasList/PizzasList'


const HomePage: React.FC = () => {
    const sortOptions: string[] = ['популярности', 'цене', 'алфавиту']
    const categoriesValue: string[] = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    
    
    return (
        <div className='home-page'>
            <div className='container'>
                <nav className='home-page__navigation'>
                    <Categories categoriesValue={categoriesValue} />
                    <Sort sortOptions={sortOptions} />
                </nav>
                <h2 className='home-page__title'>Все пиццы</h2>
                <PizzasList />
            </div>
        </div>
    )
}

export default HomePage
