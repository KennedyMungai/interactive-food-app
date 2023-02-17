import React, { useRef } from 'react'
import classes from './Checkout.module.css'

const isEmpty = value => value.trim() === ''
const isNotFiveChars = value => value.trim().length < 5

const Checkout = (props) =>
{
    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const postalCodeInputRef = useRef()
    const cityInputRef = useRef()

    const confirmHandler = (e) => 
    {
        e.preventDefault()

        const enteredNamme = nameInputRef.current.value
        const enteredStreet = streetInputRef.current.value
        const enteredPostalCode = postalCodeInputRef.current.value
        const enteredCity = cityInputRef.current.value
    }

    return (
        <form onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" ref={nameInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" ref={streetInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="postal">Postal Code</label>
                <input type="text" id="postal" ref={postalCodeInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" ref={cityInputRef} />
            </div>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Confirm</button>
        </form>
    )
}

export default Checkout