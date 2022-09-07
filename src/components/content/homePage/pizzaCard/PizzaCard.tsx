import React, { useState } from 'react'
import SvgSelector from '../../../../SvgSelectors/SvgSelector'
import { IPizza } from './../../../../models/IPizza'

interface IActiveOptions {
    type: string
    size: number | null
}
type TChoseType = (t: string) => void
type TChoseSize = (s: number) => void

const PizzaCard: React.FC<IPizza> = ({id, imageUrl, title, types, sizes, price, category, rating}) => {
    const [activeOptions, setActiveOptions] = useState<IActiveOptions>({type:'', size: null})

    const chooseType: TChoseType = (t) => {
        setActiveOptions({...activeOptions, type: t})
    }
    const chooseSize: TChoseSize = (s) => {
        setActiveOptions({...activeOptions, size: s})
    }

    return (
        <div key={title} className='home-page__pizza-card pizza-card'>
            <img className='pizza-card__image' src={imageUrl} alt='Pizza' />
            <h4 className='pizza-card__title'>{title}</h4>
            <div className='pizza-card__selector'> 
                <ul className='pizza-card__selectors'>
                    {types.map(e => <li key={e} className={`pizza-card__selector-item ${activeOptions.type === e && 'active'}`} onClick={() => chooseType(e)}>{e}</li>)}
                </ul>
                <ul className='pizza-card__selectors'> 
                    {sizes.map(e => <li key={e} className={`pizza-card__selector-item ${activeOptions.size === e && 'active'}`} onClick={() => chooseSize(e)}>{e} см.</li>)}
                </ul>
            </div>
            <div className='pizza-card__bottom'>
                <div className='pizza-card__price'>от {price} ₽</div>
                <button className='pizza-card__button button button--outline button--add'>
                    <SvgSelector name='buy-icon' />
                    <span className='pizza-card-text'>Добавить</span>
                    <i className='pizza-card-quantity'>2</i>
                </button>
            </div>
        </div>
    )
}

export default PizzaCard
