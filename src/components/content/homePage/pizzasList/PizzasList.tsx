import React from 'react';
import { IActiveSortAndCategory } from '../../../../models/IHomePage';
import PizzaCard from '../pizzaCard/PizzaCard';
import { IPizza } from './../../../../models/IPizza';

type PizzasListProps = {
    pizzas: IPizza[]
    activeSortAndCategory: IActiveSortAndCategory
};

const PizzasList:React.FC<PizzasListProps> = ({pizzas, activeSortAndCategory}) => {
    
    return (
        <div className='home-page__pizza-cards'>
            {pizzas.map(e => <PizzaCard key={e.title} {...e} />)}
        </div>
    )
}
export default PizzasList;