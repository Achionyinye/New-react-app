import React from 'react'
import Navbar from '../Component/navbar'
import Footer from '../Component/footer'

function PageTwo() {
    return (
        <>
        <Navbar />
            <div>
                <div id="container">

                    <form style={{
                        display: "flex", flexDirection: "row", alignItems: "center", padding: "8px 10px", gap: "10px", flex: "none", order: "1",
                        flexWrap: "wrap"
                    }}>

                        <label >Job Title</label><br />
                        <input style={{ width: "353px", height: "36px", top: "21px", padding: "8px 10px 8px 10px", gap: "10px" }}
                            type="text" placeholder="Enter Job Title" className="form-control" />

                        <label>Company Name</label><br />
                        <input style={{ width: "353px", height: "36px", top: "21px", padding: "8px 10px 8px 10px", gap: "10px" }}
                            type="text" placeholder="Enter Company Name" className="form-control" />

                        <label>Location</label><br />
                        <input style={{ width: "353px", height: "36px", top: "21px", padding: "8px 10px 8px 10px", gap: "10px" }}
                            type="text" placeholder="Enter Location" className="form-control" />

                        <label>Date Posted</label><br />
                        <input style={{ width: "353px", height: "36px", top: "21px", padding: "8px 10px 8px 10px", gap: "10px" }}
                            type="date" className="form-control" />

                        <label>Employment Type</label>
                        <select className="option" style={{ width: "353px", height: "36px", top: "21px", padding: "8px 10px 8px 10px", gap: "10px" }}>
                            <option defaultValue={"select"}>Select Employment Type</option>
                            <option defaultValue={"Full-time"}>Full-time</option>
                            <option defaultValue={"Part-time"}>Part-time</option>
                            <option defaultValue={"Contract"}>Contract</option>
                        </select>
                        <div className="col-lg-4">
                            <input type="button" name="search" value="search" />
                        </div>
                    </form>

                </div>

                <div className="col-lg-1"></div>

            </div><br /><br /><hr />
            <div>
                <h1>Recommended for you</h1>
                <h3>Here are the newest Job listing in your area</h3>
            </div>
            <div className="columns">
                <div className="row-lg-4">
                    <h1>Business Analyst</h1>
                    <h3>We are looking for an entry-level business analyst to join our team</h3><br />
                    <h4><i className="fas fa-timer"></i> Full-time</h4>
                </div>
                <div className="row-lg-4">
                    <h1>Quality Assurance Analyst</h1>
                    <h3>We are looking for an entry-level quality assurance to join our team</h3><br />
                    <h4> <i className="fas fa-clock"></i> Part-time</h4>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default PageTwo