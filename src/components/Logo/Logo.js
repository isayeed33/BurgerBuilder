import React from 'react'
import burgerLogo from '../../assets/images/logo.png'
import classes from './Logo.module.css'

const logo = (props) => {
    return (
        <div className={classes.Logo} style={{height: props.height}}>
            <img src={burgerLogo} alt="My Burger"></img>
        </div>
    )
}

export default logo
