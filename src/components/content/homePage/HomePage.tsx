import React, { useEffect, useState } from 'react'
import Categories from './categories/Categories'
import Sort from './sort/Sort'
import './homePage.css'
import PizzasList from './pizzasList/PizzasList'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { fetchPizzas } from '../../../store/reducers/pizzasSlice'
import { IActiveSortAndCategory, TSetActiveCategory } from '../../../models/IHomePage'


const HomePage: React.FC = () => {
    const { error, pizzas, isLoading } = useAppSelector((state) => state.piazza)
    const dispatch = useAppDispatch()
    const [activeSortAndCategory, setActiveSortAndCategory] = useState<IActiveSortAndCategory>({sort:'rating', category: 0, order: true})

    
    

    useEffect(() => {
        dispatch(fetchPizzas(activeSortAndCategory))
    },[dispatch, activeSortAndCategory])
    
    
    return (
        <div className='home-page'>
            <div className='container'>
                <nav className='home-page__navigation'>
                    <Categories activeSortAndCategory={activeSortAndCategory} setActiveSortAndCategory={setActiveSortAndCategory}/>
                    <Sort activeSortAndCategory={activeSortAndCategory} setActiveSortAndCategory={setActiveSortAndCategory}/>
                </nav>
                <h2 className='home-page__title'>Все пиццы</h2>
                <PizzasList pizzas={pizzas} activeSortAndCategory={activeSortAndCategory}/>
                <footer>
                    <p>*Сортировка по алфавиту не работает корректно, ввиду ограничений сервера.</p>
                    <p>*При выборе категории, работает только сортировка по цене, ввиду ограничений сервера.</p>
                </footer>
            </div>
        </div>
    )
}

export default HomePage
