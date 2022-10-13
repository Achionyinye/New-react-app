import React from 'react'

function Form() {
  return (
    <div>
        <form>
  <label for="fname">Job Title</label><br/>
  <input type="text"/><br/>
  <label for="lname">Company Name</label><br/>
  <input type="text" id="lname" name="lname" /><br/>
  <label for="lname">Location</label><br/>
  <input type="text" id="lname" name="lname" /><br/>
  <label for="lname">Employement Type</label><br/>
  <input type="text" id="lname" name="lname" /><br/>
  <label for="lname">Date Posted</label><br/>
  <input type="text" id="lname" name="lname" /><br/>

  <button>Search</button>

  <hr/>

  <p>Recommended for you</p>
  <p>Here are the newest job listings in your area.</p>
        </form>
    </div>
  )
}

export default Form