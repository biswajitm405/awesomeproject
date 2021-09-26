import React from 'react'
import { NavLink } from 'react-router-dom'

const Home =() =>{
    return (
        <>
            <h1>This is Home page</h1>
           <NavLink to="/help"> <button className="btn btn-success">hello</button></NavLink>

        </>
    )
}
export default Home
