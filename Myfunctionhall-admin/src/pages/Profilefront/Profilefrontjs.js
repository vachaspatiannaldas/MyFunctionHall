import React from 'react'

function Profilefrontjs() {
    function AddScript(path)
    {
      const script = document.createElement('script')
      script.src = path;
      script.async = true;
      document.body.appendChild(script);
    }
  return (
    <React.Fragment>
      {AddScript('/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js')}
      {AddScript('https://netdna.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js')}
      
    </React.Fragment>
  )
}

export default Profilefrontjs
