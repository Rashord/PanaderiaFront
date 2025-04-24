import React, { useState } from 'react'
import classes from './Search.module.css'
import SearchIcon from './SearchIcon'
import CircleCrossIcon from './CircleCrossIcon'

const SearchInput = ( {getValue}) => {
  const [filterValue, setFilterValue] = useState('')

  const handle = (e) =>{
    setFilterValue(e.target.value)
    getValue(e.target.value)
  }
  const cleanInput = () =>{
    setFilterValue('')
    getValue('')
  }

  return (
    <div className={`${classes.headerMov}`}>
      
      <div className={`${classes.avatar}`}>
        <img className={`${classes.logo}`} src='logoS.webp'/>
      </div>

        
        <div style={{marginInline:'10px'}}>
          <div className={`${classes.searchContainer}`} >
            <SearchIcon/>
            <input 
              type='text'
              className={`${classes.busqueda}`} 
              value={filterValue} 
              onChange={handle} 
              placeholder='Buscar por nombre'
            />
            <button className={`${classes.buttonCross}`} onClick={cleanInput}>
              <CircleCrossIcon/>
            </button>
          </div>
      </div>
    </div>
    
  )
}

export default SearchInput