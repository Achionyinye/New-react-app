import React from 'react'
import Footer from '../Component/footer'
import Navbar from '../Component/navbar'

function PageFive() {
    return (
        <>
        <div className='px-5'>
        <Navbar />
         <div id="main-container" >
            <div className="row">
                <div className="col-5">
                    <div id="left-container" style={{ padding: "5% 5% 5% 5%", margin: "5% 5% 5% 5%" }}>
                        <h4>Add your contact information</h4>
                        <form style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif", lineHeight: "20px" }}>
                            <label style={{fontSize: "15px", marginTop: "23px", fontFamily: "sans-serif", fontWeight: "500"}}>First Name <span className="text-danger">*</span></label><br />
                            <input style={{ padding: "7px 5px", width: "100%" }} type="text" placeholder="Enter Your First Name" className="form controls" required /><br />
                            <label style={{ fontSize: "15px", marginTop: "23px", fontFamily: "sans-serif", fontWeight: "500" }}>Middle Name</label><br />
                            <input style={{ padding: "7px 5px", width: "100%" }} type="text" placeholder="Enter Your Middle Name" className="form controls" required /><br />
                            <label style={{fontSize: "15px", marginTop: "23px", fontFamily: "sans-serif", fontWeight: "500"}}>Last Name <span className="text-danger">*</span></label><br />
                            <input style={{ padding: "7px 5px", width: "100%" }} type="text" placeholder="Enter Your Last Name" className="form controls" required /><br />
                            <label style={{fontSize: "15px", marginTop: "23px", fontFamily: "sans-serif", fontWeight: "500"}}>Email Address <span className="text-danger">*</span></label><br />
                            <input style={{padding: "7px 5px", width: "100%"}} type="text" placeholder="Enter Your Email Address" className="form controls" required /><br />
                                <label style={{fontSize: "15px", marginTop: "23px", fontFamily: "sans-serif", fontWeight: "500"}}>Phone Number <span className="text-danger">*</span></label><br />
                                <input style={{padding: "7px 5px", width: "100%"}} type="text" placeholder="+2349134567890" className="form controls" required />
                                    <br />
                                </form>
                            </div>
                                <button style={{margin: "5px 0px 0px 50px", padding: "10px 10px 10px 10px", backgroundColor: "black", color: "white", borderRadius: "5px"}}type="submit" id="continue">Continue</button>
                            </div>
                            <div className="col-7">
                                <div id="right-container" style={{border: "2px solid rgb(180, 180, 180)", margin: "7% 7% 7% 7%"}}>
                                    <div className="m-5">
                                        <h4><strong>Software developer</strong></h4>
                                        <p>LurisByteRM</p><br />
                                        <p><i className="fa fa-clock"></i> Full-time</p>
                                    </div>
                                    <div className="m-5">
                                        <h5><strong>Job Description</strong></h5>
                                        <p>We are looking for a senior software developer to join our team. As the software
                                            developer you will play the<br /> most important role. You will create the application
                                            interface that will be used by millions of legal<br /> professionals.</p>
                                    </div>
                                    <div className="m-5">
                                        <h5><strong>Requirements</strong></h5>
                                        
                                            <ol>
                                                <li> High sense of aesthetics.</li>
                                                <li>Analytical thinking and business values.</li>
                                                <li>Fluent with Agile methodology</li>
                                                <li>Proficient in Python, Node JS, Ruby On Rails, Erlange, GoLang.</li>
                                            </ol>
                                        
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
             </div>
                <Footer />
        </>
       
                )
}

                export default PageFive