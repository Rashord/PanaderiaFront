import React from 'react'
import classes from './HeaderApp.module.css'

const HeaderApp = () => {
  return (
    <header className={`${classes.headerApp}`}>
        <img className={`${classes.logo}`} src='logo.webp'/>
    </header>
  )
}

export default HeaderApp