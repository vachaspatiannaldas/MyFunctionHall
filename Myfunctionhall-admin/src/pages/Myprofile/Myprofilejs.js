import React from 'react'

const Myprofilejs = () => {
    function AddScript(path)
    {
      const script = document.createElement('script')
      script.src = path;
      script.async = true;
      document.body.appendChild(script);
    }
  return (
    <React.Fragment>
      {AddScript('http://code.jquery.com/jquery-1.10.2.min.js')}
      {AddScript('http://netdna.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js')}
      
     
    </React.Fragment>
  )
}

export default Myprofilejs
