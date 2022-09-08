import React from 'react'
import HomePage from './homePage/HomePage'
import './content.css'
import CartPage from './cartPage/CartPage'
import { Route, Routes } from 'react-router-dom'
import NotFound from './notFound/NotFound'

const Content = () => {
    return (
        <div className='content'>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default Content
