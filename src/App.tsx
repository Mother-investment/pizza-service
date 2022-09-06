import React from 'react'
import Header from './components/header/Header'
import './app.css'
import Content from './components/content/Content'

const App = () =>{
    return (
        <div className='app'>
            <Header />
            <Content />
        </div>
    )
}

export default App
