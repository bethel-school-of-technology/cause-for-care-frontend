import React from 'react';

const Jobapp = () => (
    <div>
        <form>
        <label for="org">Organazation Applying for:</label>
        <input type="text" name="org" required></input>
        <label for="name">First Name:</label>
        <input type="text" name="fname" required></input>
        <label for="name">Last Name:</label>
        <input type="text" name="lname" required></input>
        <label for="birth">Birthdate</label>
        <input type="text" name="birth" required></input>
        <label for="location">Address</label>
        <input type="text" name="location" required></input>
        </form>
    </div>
)
export default Jobapp;