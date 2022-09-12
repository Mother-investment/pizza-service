import React from 'react'
import SvgSelector from '../../../../SvgSelectors/SvgSelector'

type SearchProps = {
    activeSearch: boolean
    searchValue: string
    setActiveSearch: React.Dispatch<React.SetStateAction<boolean>>
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

const Search: React.FC<SearchProps> = ({activeSearch, setActiveSearch, searchValue, setSearchValue}) => {
    return (
        <div className='search'>
            <div className='search__button'>
                <div className={`search__icon ${activeSearch && 'search__icon--active'}`}><SvgSelector name='search' /></div>
                {activeSearch || <span onClick={() => setActiveSearch(true)}>Поиск</span>}
                {activeSearch && <input type="text" className='search__input' autoFocus onBlur={() => searchValue === '' && setActiveSearch(false)} value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>}
                
            </div>
        </div>
    )
}
export default Search
