import React from 'react'
import logo from "../Icon/logo.svg"


function Login() {
    return (
        <div style={{
            backgroundColor: "white",
            textAlign: "center",
            margin: "10% 35% 25% 35%",
            padding: "3rem 5rem",
            borderRadius: "15px",
            boxShadow: "1px 1px 3px 1px rgb(192,192,192)"
        }}>
            <img src={logo} alt="Logo"  className='justify-content-center pb-3' />
         <h4 className='mb-4'>Welcome</h4>
         <form className='justify-content-center'>
         <label style={{float: "left", fontSize: "12px"}}>Username</label><br/>
         <input style={{fontSize: "12px"}} className='form-control text-sm' placeholder="Enter username"/><br/>
         <label style={{float: "left", fontSize: "12px", }}>Password</label><br/>
         <input style={{fontSize: "12px"}} className='form-control' placeholder="Enter password"/>
         <p style={{fontSize: "12px", textAlign: "right"}}>Forget Password</p>
         <button className='form-control bg-dark text-white mt-4'>Log In</button>
         </form>

        </div>
    )
}

export default Login