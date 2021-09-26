import React from 'react'
import { NavLink } from 'react-router-dom'

const About =() =>{
    return (
        <>
            <h1>This is about page</h1>
           <NavLink to="/services"> <button className="btn btn-primary">hello</button></NavLink>
        </>
    )
}
export default About
