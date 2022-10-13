import React from 'react'
import Navbar from '../Component/navbar'
import Footer from '../Component/footer'

function PageFour() {
    return (
        <>
        <div className='px-5'>
            <Navbar />
            <div>

                <div className="main-container" style={{ backgroundColor: "rgb(243, 240, 240);" }}>
                    <div className="row">
                        <div className="col-lg-5">
                            <div id="left-container" style={{ margin: " 5% 5% 5% 5%" }}>
                                <h2>Senior Software Developer</h2>
                                <p>Katampe Abuja</p>
                            </div>
                        </div>
                        <div className="col-lg-7 senior">
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
                                    <p>
                                        <ol>
                                            <li> High sense of aesthetics.</li>
                                            <li>Analytical thinking and business values.</li>
                                            <li>Fluent with Agile methodology</li>
                                            <li>Proficient in Python, Node JS, Ruby On Rails, Erlange, GoLang.</li>
                                        </ol>
                                    </p>

                                </div>
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

export default PageFour