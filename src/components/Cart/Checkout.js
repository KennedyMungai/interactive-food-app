import React, { useRef } from 'react'
import classes from './Checkout.module.css'

const Checkout = (props) =>
{
    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const postalCodeInputRef = useRef()
    const cityInputRef = useRef()

    const confirmHandler = (e) => 
    {
        e.preventDefault()
    }

    return (
        <form onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" />
            </div>
            <div className={classes.control}>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" />
            </div>
            <div className={classes.control}>
                <label htmlFor="postal">Postal Code</label>
                <input type="text" id="postal" />
            </div>
            <div className={classes.control}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" />
            </div>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Confirm</button>
        </form>
    )
}

export default Checkout