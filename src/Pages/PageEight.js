import React from 'react'
import Footer from '../Component/footer'
import Navbar from '../Component/navbar'

function PageEight() {
    return (
        <>
            <div className='px-5 mb-5'>
                <Navbar />
                <div id="main-container">
                    <div className="row">
                        <div className="col-lg-3"></div>

                        <div className="col-lg-6">
                            <div id="centre-container">
                                <div
                                    style={{ border: "1px solid rgb(180, 180, 180)", width: "120%", borderRadius: "5px", padding: "7px 0px 0px 20px", marginTop: "30px" }}>
                                    <h5>Senior Software Developer</h5>
                                    <p>LurisByteRM. Abuja</p>
                                </div>
                                <div style={{ border: "1px solid rgb(180, 180, 180)", width: "120%", borderRadius: "5px", padding: "7px 0px 0px 20px", marginTop: "15px" }}>
                                    <h5 style={{ paddingTop: "20px" }}>Please review your application</h5><br />
                                    <p>Contact Information</p>
                                    <div style={{ backgroundColor: "white", width: "90%", borderRadius: "5px", padding: "25px 0px 25px 25px", boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.05)" }}>
                                        <h6>Full name</h6>
                                        <strong>Folashade Dozie Olamide</strong><br /><br />
                                        <h6>Email Address</h6>
                                        <strong>folamide@gmail.com</strong><br /><br />
                                        <h6>Phone Number</h6>
                                        <strong>+2347091245679</strong>
                                    </div><br /><br />
                                    <p>Education</p>
                                    <div style={{ backgroundColor: "white", width: "90%", borderRadius: "5px", padding: "25px 0px 25px 25px", boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.05)" }} >
                                        <h6>Education History</h6>
                                        <strong>I graduated from the University of Odumoyoyo, Italy three years ago. I was cheer captain
                                            of the fleabag sisters confraternity football club. I graduated with a third className honors in
                                            English Language.</strong>
                                    </div><br />
                                    <p>Resume and Supporting Documents</p>
                                    <div style={{ background: "#EDF6FC", padding: "10px 0px 10px 15px", width: "90%", borderRadius: "5px" }}>
                                        <i className="fa fa-file-pdf-o"></i>
                                        <div>
                                            <h5 style={{ fontWeight: "400", fontSize: "12px", lineHeight: "14px", fontStyle: "normal" }}>Adamu_Garba_CV.pdf</h5>
                                            <p style={{ fontWeight: "400", fontSize: "10px", lineHeight: "12px" }}>234KB</p>
                                        </div>
                                    </div>
                                    <div style={{ background: "#EDF6FC", padding: "10px 0px 4px 15px", marginBottom: "50px", width: "90%", borderRadius: "5px", marginTop: "10px" }}>
                                        <i class="fa fa-file-pdf-o"></i>
                                        <div>
                                            <h5 style={{ fontWeight: "400", fontSize: "15px", lineHeight: "14px", fontStyle: "normal" }}>Adamu_Garba_Affidavit.pdf<span style={{ marginLeft: "65%" }}>✖</span></h5>
                                            <p style={{ fontWeight: "400", fontSize: "12px", lineHeight: "12px" }}>104KB</p>

                                        </div>

                                    </div>
                                    <button type="button" style={{ backgroundColor: "black", color: "white", padding: "15px 60px 15px 60px", borderRadius: "10px", marginBottom: "40px" }}>Submit Application </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3"></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}
export default PageEight
