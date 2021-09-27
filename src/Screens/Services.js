import React from 'react'
import { NavLink } from 'react-router-dom'

const Services =() =>{
    return (
        <>
            <h1>This is Services page</h1>
            <NavLink to="/about"> <button className="btn btn-primary">hello</button></NavLink>

        </>
    )
}
export default Services
