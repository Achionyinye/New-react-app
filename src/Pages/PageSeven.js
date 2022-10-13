import React from 'react'
import Footer from '../Component/footer'
import Navbar from '../Component/navbar'

function PageSeven() {
    return (
        <>
            <div className='px-5'>
                <Navbar />
                <div className="main-container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div id="left-container" style={{ margin: "5% 5% 5% 20% " }}>
                                <h4 style={{ fontFamily: "sans-serif", fontWeight: "700", fontSize: "21px" }} className="m-5">Add a resume and
                                    supporting
                                    documents for the employer</h4>

                                <div className="m-5">
                                    <form>
                                        <div style={{position :"absolute", backgroundColor:"white", padding: "8px 9px 6px 9px", border: "1px solid rgb(192, 191, 191)", fontWeight: "400"}}>Choose File</div>
                                        <input style={{ width: "88%", height: "40px", border: "1px solid rgb(192, 191, 191)", marginLeft: "100px", paddingLeft: "20px" }} type="text"
                                            placeholder="No File Chosen" />
                                    </form>

                                    <div style={{ background: "#e3eaf0", padding: "4px 0px 4px 15px", width: "120%", borderRadius: "10px", marginTop: "50px" }}>
                                        <i className="fa fa-file-pdf-o"></i>
                                        <div>
                                            <h5 style={{ fontWeight: "400", fontSize: "15px", lineHeight: "14px", fontStyle: "normal" }}>Adamu_Garba_CV.pdf<span style={{ marginLeft: "48%" }}>✖</span></h5>
                                            <p style={{ fontWeight: "400", fontSize: "12px", lineHeight: "12px" }}>234KB</p>
                                        </div>
                                    </div>
                                    <div style={{ background: "#e3eaf0", padding: "4px 0px 4px 15px", width: "120%", borderRadius: "10px", marginTop: "15px" }}>
                                        <i className="fa fa-file-pdf-o"></i>
                                        <div>
                                            <h5 style={{ fontWeight: "400", fontSize: "15px", lineHeight: "14px", fontStyle: "normal" }}>Adamu_Garba_CV.pdf<span style={{ marginLeft: "48%" }}>✖</span></h5>
                                            <p style={{ fontWeight: "400", fontSize: "12px", lineHeight: "12px" }}>234KB</p>
                                        </div>
                                    </div>
                            <button type="submit"
                                style={{ backgroundColor: "rgb(0, 0, 0)", color: "white", padding: "3px 10px", marginTop: "20px", borderRadius: "5px" }}>Continue</button>
                                </div>
                            </div>
                        </div>
                    <div className="col-lg-7">
                        <div id="right-container" style={{ border: "2px solid rgb(180, 180, 180)", margin: "7% 7% 7% 7%" }}>
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
                                <div>
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
            </div >
            <Footer />
        </>
    )
}

export default PageSeven


