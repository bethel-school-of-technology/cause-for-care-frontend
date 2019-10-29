import React from "react";

const Nav = ({title}) => (
    <div>
        <a href='/'>Home</a>
        <a href='/'>Login</a>
        <h1>{title}</h1>
    </div>
);

export default Nav;