import React from 'react'

const Myprofilecss = () => {
    function AddCC(urlOfTheLibrary) {
        const script = document.createElement('link');
        script.href = urlOfTheLibrary;
        script.rel ="stylesheet";
        script.type="text/css";
        document.head.appendChild(script);
      }
  return (
    <React.Fragment>
      {AddCC('http://netdna.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css')}  
      {AddCC('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css')}  
      {AddCC('myprofile.css')}  

    </React.Fragment>
  )
}

export default Myprofilecss
