import React from 'react'

function loginnew() {
  return (
    <React.Fragment>
      <center>
  <img src="./plogo.jpg" className="f" />
  <div className="d">
    <h1 className='h1login'>Sign-In</h1>
    <form>
      <label className="l">Email (phone for mobile accounts)</label>
      <br />
      <input type="text" className="t" />
      <br />
      <br />
      <label className="l1">
        Password &nbsp; &nbsp;&nbsp;&nbsp;
        <a href="#">Forget your Password?</a>
      </label>
      <br />
      <input type="text" className="t" />
      <br />
      <br />
      <button className="b2">Sign-In</button>
      <br />
      <p>
        By continuing, you agree to Amazon's <br />
        <a href="#">Conditons of Use</a>
        and <a href="#">Privacy Notice </a>
      </p>
      <div className="s">
        <input type="checkbox" />
        Keep me signed in.
        <div className="popover__wrapper">
          <a href="#" className="d2">
            Details
          </a>
          <div className="popover__content">
            <p className="popover-message">"Keep me signed In" checkbox</p>
            <hr />
            Choosing "Keep me Signed In" reduces the number of times you're
            asked to sign in To keep your account secure, use this option only
            on your personal devices.
            <p />
          </div>
        </div>{" "}
        <br />
        <p className="b">New to Amazon</p>
        <button className="b1">
          <span className="n">Create your Amazon account</span>
        </button>
      </div>
    </form>
  </div>
  <br />
  <br />
  <br />
  <a href="#">Conditions of Use</a>&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#">Privacy Notice</a>&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#">Help</a>
  <br />
  <p style={{ marginLeft: 30 }}>
    © 1996-2023, Amazon.com, Inc. or its affiliates
  </p>
</center>

    </React.Fragment>
  )
}

export default loginnew