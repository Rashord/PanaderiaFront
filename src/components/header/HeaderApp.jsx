import React from 'react'

import classes from './HeaderApp.module.css' 

const HeaderApp = () => {
  return (
    <header className={`${classes.headerApp}`}>
      <div className={`${classes.avatar}`}>
        <img className={`${classes.logo}`} src='logo.webp' alt='logo panaderia RyM'/>
      </div>
    </header>
  )
}

export default HeaderApp
