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
    const [activeSortAndCategory, setActiveSortAndCategory] = useState<IActiveSortAndCategory>({sort:'rating', category: 0})

    
    const categoriesValue: string[] = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
   
    const setActiveCategory: TSetActiveCategory = (value: number) => {
        setActiveSortAndCategory({...activeSortAndCategory, category: value})
    }

    useEffect(() => {
        dispatch(fetchPizzas(activeSortAndCategory))
    },[dispatch, activeSortAndCategory])
    
    
    return (
        <div className='home-page'>
            <div className='container'>
                <nav className='home-page__navigation'>
                    <Categories categoriesValue={categoriesValue} />
                    <Sort activeSortAndCategory={activeSortAndCategory} setActiveSortAndCategory={setActiveSortAndCategory}/>
                </nav>
                <h2 className='home-page__title'>Все пиццы</h2>
                <PizzasList pizzas={pizzas} activeSortAndCategory={activeSortAndCategory}/>
            </div>
        </div>
    )
}

export default HomePage
