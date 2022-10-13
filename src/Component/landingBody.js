import React from 'react'
import login from "../Icon/login.svg"

function LandingBody() {
    return (
        <div style={{marginTop: "5rem"}}className='d-flex justify-content-between mx-5 p-5'>
            <div>
                <p style={{marginTop: "7rem"}} className='fs-1 fw-bold'>Finding the perfect job <br /> has never been this easy </p>
                <p>Apply for jobs here to take you to the next step in your career. 
                    It only <br /> takes a few seconds!</p>
                    <button style={{backgroundColor:  "black", color: "white"}} className= 'mt-2'>Apply Now</button>
                    <p className= 'mt-4'>A product of Byteworks Technology Solutions Limited</p>
            </div>
            <div>
                <img src={login} alt="Logo" />
            </div>
        </div>
    )
}

export default LandingBody