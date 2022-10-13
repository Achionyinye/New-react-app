import React from 'react'
import Navbar from '../Component/navbar'
import LandingBody from '../Component/landingBody'
import Footer from '../Component/footer'

function LandingPage() {
  return (
    <>
<div className='px-5'>
    <Navbar />
    <LandingBody />
</div>
    <Footer />
    </>
  )
}

export default LandingPage