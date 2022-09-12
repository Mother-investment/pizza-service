import React, { useEffect, useState } from 'react'
import Categories from './categories/Categories'
import Sort from './sort/Sort'
import './homePage.css'
import PizzasList from './pizzasList/PizzasList'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { fetchPizzas } from '../../../store/reducers/pizzasSlice'
import { IActiveSortAndCategory, TSetActiveCategory } from '../../../models/IHomePage'
import Search from './search/Search'


const HomePage: React.FC = () => {
    const { error, pizzas, isLoading } = useAppSelector((state) => state.piazza)
    const dispatch = useAppDispatch()
    const [activeSortAndCategory, setActiveSortAndCategory] = useState<IActiveSortAndCategory>({sort:'rating', category: 0, order: true})
    const [activeSearch, setActiveSearch] = useState<boolean>(false)
    const [searchValue, setSearchValue] = useState<string>('')

    
    

    useEffect(() => {
        dispatch(fetchPizzas(activeSortAndCategory))
    },[dispatch, activeSortAndCategory])
    
    
    return (
        <div className='home-page'>
            <div className='container'>
                <nav className='home-page__navigation'>
                    {activeSearch || <Categories activeSortAndCategory={activeSortAndCategory} setActiveSortAndCategory={setActiveSortAndCategory}/>}
                    <Search activeSearch={activeSearch} setActiveSearch={setActiveSearch} searchValue={searchValue} setSearchValue={setSearchValue} />
                    {activeSearch || <Sort activeSortAndCategory={activeSortAndCategory} setActiveSortAndCategory={setActiveSortAndCategory}/>}
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
