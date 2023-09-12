# ezworks assignment

## MainSection.js

Import Statements

-> Importing React, useState from the 'react' library.
-> Importing the SmallBox component from '../components/SmallBoxes'.
Importing myData array from '../utils/myData'.
Importing the emailRegex from '../utils/regex'.
Importing the submitEmail function from '../config/api'.
MainSection Component
This is a React functional component called MainSection.
It represents the main section of a web page.
State Variables
email: This state variable is used to store the email input from the user.
formError: It is used to display any error message related to form submission.
formMessage: This state variable displays success or informational messages after form submission.
loading: This state variable is used to control the loading state while submitting the form.
handleSubmit Function
This is an asynchronous function that handles the form submission.
It prevents the default form submission behavior and sets loading to true to indicate that form submission is in progress.
It performs several validation checks on the email input:
Checks if the email is not empty and displays an error message if it is.
Validates the email using a regular expression (emailRegex) and displays an error message if it's invalid.
Checks if the email ends with "@ez.works" and displays an error message if it does.
If there are no errors, it clears any previous error or message and calls the submitEmail function with the email input.
It updates the formError and formMessage state variables based on the result of the submitEmail function.
Finally, it sets loading back to false.
Render Function
The render function returns JSX that represents the main section of the web page.
It contains a form with an input field for email, a submit button, and placeholders for error and success messages.
It also displays information about the application and a list of small boxes (imported from SmallBox) with icons and text.
SmallBox.js
Import Statements
Importing React from 'react'.
Importing a CSS file for styling.
SmallBox Component
This is a React functional component called SmallBox.
It represents a small box with an icon, title, and text.
Render Function
The render function returns JSX that represents the structure and content of the small box.
It includes an image (icon), a title, and a text description.


