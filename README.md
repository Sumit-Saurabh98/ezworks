# ezworks assignment

## MainSection.js

Import Statements

-> Importing React, useState from the 'react' library. <br/>
-> Importing the SmallBox component from '../components/SmallBoxes'.<br/>
-> Importing the data from '../utils/myData'.<br/>
-> Importing the emailRegex(form email validation) from '../utils/regex'.<br/>
-> Importing the submitEmail(calling the API) function from '../config/api'.<br/>

## MainSection Component

-> This is a React functional component called MainSection. <br/>
It represents the main section of a web page.<br/>

### State Variables
email: This state variable is used to store the email input from the user. <br/>
formError: It is used to display any error message related to form submission.<br/>
formMessage: This state variable displays success or informational messages after form submission.<br/>
loading: This state variable is used to control the loading state while submitting the form.<br/>

### handleSubmit Function

This is an asynchronous function that handles the form submission.<br/>
It prevents the default form submission behaviour and sets loading to true to indicate that form submission is in progress.<br/>
It performs several validation checks on the email input:<br/>

-> Check if the email is not empty and display an error message if it is. <br/>
-> Validates the email using a regular expression (emailRegex) and displays an error message if it's invalid.<br/>
-> Check if the email ends with "@ez.works" and display an error message if it does.<br/>
-> If there are no errors, it clears any previous error or message and calls the submitEmail function with the email input.<br/>
-> It updates the formError and formMessage state variables based on the result of the submitEmail function.<br/>
-> Finally, it sets loading back to false.

## SmallBox.js

Import Statements

-> Importing React from 'react'.<br/>
-> Importing a CSS file for styling.<br/>


### SmallBox Component
This is a React functional component called SmallBox.<br/>
It represents a small box with an icon, title, and text.<br/>



