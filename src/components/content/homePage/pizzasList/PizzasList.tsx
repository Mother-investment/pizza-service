import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import PizzaCard from '../pizzaCard/PizzaCard'
import { fetchPizzas } from './../../../../store/reducers/pizzasSlice';

const PizzasList = () => {
    const { error, pizzas, isLoading } = useAppSelector((state) => state.piazza)
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(fetchPizzas())
    },[dispatch])
    return (
        <div className='home-page__pizza-cards'>
            {pizzas.map(e => <PizzaCard key={e.title} {...e} />)}
        </div>
    )
}

export default PizzasList
