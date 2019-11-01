import React from 'react';


const Login = () => (
   <form>
       <div>
           <label for="uname">Username:</label>
           <input type="text" placeholder="Enter Username" name="uname" required></input>
           <br></br>
           <label for="pass">Password:</label>
           <input type="text" placeholder="Enter Password" name="pass" required></input>
            <br></br>
            <button type="submit">Login</button>

       </div>

   </form>
);

export default Login;