import React from 'react';

const Signup = () => (
    <div>
    <h3>Welcome!</h3>
    <form>
        <label for="name">First Name:</label>
        <input type="text" name="fname" required></input>
        <br></br>
        <label for="name">Last Name:</label>
        <input type="text" name="lname" required></input>
        <br></br>
        <label for="email">Email:</label>
        <input type="text" name="email" required></input>
        <br></br>
        <label for="password">Password:</label>
        <input type="text" name="password" required></input>
    </form>
    
</div>
)

export default Signup;