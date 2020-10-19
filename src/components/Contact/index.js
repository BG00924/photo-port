import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    //hook that manages form data
    const [formState, setFormState] = useState({ name: '', email: '', message: '' })

    //destructures formState object so we can just put defaultValue={name}, etc
    const { name, email, message } = formState

    //error message
    const [errorMessage, setErrorMessage] = useState('')

    //accepts user input into fields
    function handleChange(e) {
        //error message handling for name, email, and message prior to serFormState
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value)
            console.log(isValid)
            // isvalid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.')
            } else {
                setErrorMessage('')
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`)
            } else {
                setErrorMessage('')
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }

        //checked to see if vaildation worked
        // console.log('errorMessage', errorMessage)
    }

    //checked to ensure stat was properly syncing with UI
    // console.log(formState)

    //submit function
    function handleSubmit(e) {
        e.preventDefault()
        // console.log(formState)
    }

    return (
        <section>
            <h1 data-testid="ugh">Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    {/* using onBlur prevents error message until focus shifts from field */}
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="eamil">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                {/* the above is the same as:
                    if(errorMessage) {
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    } 
                */}
                <button type="submit" data-testid="ughButton">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm