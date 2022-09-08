import React from 'react'
import { Link } from 'react-router-dom'

type NotFoundProps = {}

const NotFound: React.FC<NotFoundProps> = () => {
    return (
        <div className='not-found'>
            <h1>Ничего не найдено</h1>
            <Link to='/'>Вернуться на главную</Link>
        </div>
    )
}
export default NotFound
