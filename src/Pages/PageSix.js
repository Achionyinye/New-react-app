import React from 'react'
import Navbar from '../Component/navbar'
import Footer from '../Component/footer'

function PageSix() {
  return (
    <>
    <div className='px-5'>
    <Navbar />
    <div id="main-container">
      <div className="row">
        <div className="col-lg-5">
          <div className="left-container">
            <h4 className="m-5"><strong>Add your most recent education 
                history</strong></h4>
                <form className="m-5">
                    <label style={{fontSize: "20px", fontWeight:"500"}}>Education History <span className="text-danger">*</span></label><br/>
                    <textarea className="w-100" style={{paddingBottom: "150px"}} type="text" placeholder="I graduated from..."required ></textarea>
                </form>
                <button type="submit" style={{backgroundColor: "rgb(0, 0, 0)", color: "white", padding: "10px 10px 10px 10px", margin: "0px 0px 20px 45px", borderRadius: "5px"}}>Continue</button>
          </div>
        </div>
        <div className="col-lg-7">
            <div id="right-container" style={{border: "2px solid rgb(180, 180, 180)", margin: "7% 7% 7% 7%"}}>
                <div className="m-5">
                  <h4><strong>Software developer</strong></h4>
                  <p>LurisByteRM</p><br/>
                  <p><i className="fa fa-clock"></i> Full-time</p>
                </div>
                <div className="m-5">
                  <h5><strong>Job Description</strong></h5>
                <p>We are looking for a senior software developer to join our team. As the software
                    developer you will play the<br/> most important role. You will create the application
                    interface that will be used by millions of legal<br/> professionals.</p>
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
    <Footer />
    </>
  )
}

export default PageSix