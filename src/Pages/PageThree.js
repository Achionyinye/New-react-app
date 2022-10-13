import React from 'react'
import Navbar from '../Component/navbar'
import Footer from '../Component/footer'

function PageThree() {
    return (
        <>
            <Navbar />

            <div id="container">

                <form style={{ margin: "7rem 5rem 0px 7rem", flexWrap: "wrap", columnGap: "15%", rowGap: "20%" }}>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label style={{ fontSize: "14px" }}>Job Title</label><br />
                            <input style={{ fontSize: "14px" }}type="text" placeholder="Enter Job Title" className="form-control" /><br />
                        </div>

                        <div className="form-group col-md-4">
                            <label style={{ fontSize: "14px" }}>Company Name</label><br />
                            <input style={{ fontSize: "14px" }} type="text" placeholder="Enter Company Name" className="form-control" /><br />
                        </div>

                        <div className="form-group col-md-4">
                            <label style={{ fontSize: "14px" }}>Location</label><br />
                            <input style={{ fontSize: "14px" }} type="text" placeholder="Enter Location" className="form-control" /><br />
                        </div>
                    </div>

                    <div className='form-row'>
                        <div className="form-group col-md-4">
                            <label style={{ fontSize: "14px" }}>Employment Type</label><br />
                            <select style={{ fontSize: "14px" }}className="option form-control">
                                <option >Select Employment Type</option>
                                <option defaultValue={"full-time"}>Full-time</option>
                                <option defaultValue={"part-time"}>Part-time</option>
                                <option defaultValue={"contract"}>Contract</option>
                            </select>
                        </div>

                        <div className="form-group col-md-4">
                            <label style={{ fontSize: "14px", fontSize: "14px" }}>Date Posted</label><br />
                            <input type="date" className="form-control" /><br />
                        </div>

                        <button className="form-group col-md-1"
                            style={{ position: "absolute", margin: "2rem 0rem 5rem 71rem", padding: "5px 10px 5px 10px", borderRadius: "5px", backgroundColor: "black", color: "white" }}><i
                                className="fas fa-search"></i> Search</button>
                    </div>
                </form>

                <hr style={{ margin: "7% 6% 3% 8%" }} />

                <div className="row">
                    <div className="col-lg-5">
                        <div style={{ margin: "0% 0% 5% 20%" }}>
                            <h5><strong>Software Developer</strong></h5>
                            <p>Here are the newest Job listing in your area</p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <p style={{
                            position: "absolute", margin: "2rem 0px 0px 34rem", backgroundColor: "rgb(214, 213, 213)",
                            padding: "1px 15px 1px 15px", borderRadius: "20px", fontSize: "13px"
                        }}><strong>Abuja</strong></p>
                        <div
                            style={{ border: "2px solid rgb(214, 213, 213)", padding: "15px 25px 15px 25px", margin: "15px 200px 15px 100px", borderRadius: "5px" }}>
                            <h6><strong>Senior Software Developer</strong></h6>
                            <p>We are looking for an entry-level business analyst to join our team</p>
                            <p><i className="fa fa-clock"></i> Full-time</p>
                        </div>
                        <p style={{
                            position: "absolute", margin: "2rem 0px 0px 34rem", backgroundColor: "rgb(214, 213, 213)",
                            padding: "1px 15px 1px 15px", borderRadius: "20px", fontSize: "13px"
                        }}><strong>Gombe</strong></p>
                        <div
                            style={{ border: "2px solid rgb(214, 213, 213)", padding: "15px 25px 15px 25px", margin: "30px 200px 30px 100px", borderRadius: "5px" }}>
                            <h6><strong>Junior Software Developer</strong></h6>
                            <p>We are looking for an entry-level quality assurance to join our team</p>
                            <p> <i className="fa fa-clock"></i> Part-time</p>
                        </div>
                        <p style={{
                            position: "absolute", margin: "1rem 0px 0px 34rem", backgroundColor: "rgb(214, 213, 213)",
                            padding: "1px 15px 1px 15px", borderRadius: "20px", fontSize: "13px"
                        }}><strong>Calabar</strong></p>
                        <div
                            style={{ border: "2px solid rgb(214, 213, 213)", padding: "15px 25px 15px 25px", margin: "15px 200px 15px 100px", borderRadius: "5px" }}>
                            <h6><strong>Full-Stack Software Developer</strong></h6>
                            <p>We are looking for an entry-level business analyst to join our team</p>
                            <p><i className="fa fa-clock"></i> Full-time</p>
                        </div>
                        <p style={{
                            position: "absolute", margin: "2rem 0px 0px 34rem", backgroundColor: "rgb(214, 213, 213)",
                            padding: "1px 15px 1px 15px", borderRadius: "20px", fontSize: "13px"
                        }}><strong>Kaduna</strong></p>
                        <div
                            style={{ border: "2px solid rgb(214, 213, 213)", padding: "15px 25px 15px 25px", margin: "30px 200px 30px 100px", borderRadius: "5px" }}>
                            <h6><strong>Java Software Developer</strong></h6>
                            <p>We are looking for an entry-level quality assurance to join our team</p>
                            <p> <i className="fa fa-clock"></i> Part-time</p>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </>

    )
}

export default PageThree