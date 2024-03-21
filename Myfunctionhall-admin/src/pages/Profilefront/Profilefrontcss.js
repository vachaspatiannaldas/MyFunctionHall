import React from 'react'

const Profilefrontcss = () => {
    function AddCC(urlOfTheLibrary) {
        const script = document.createElement('link');
        script.href = urlOfTheLibrary;
        script.rel ="stylesheet";
        script.type="text/css";
        document.head.appendChild(script);
      }
  return (
    <React.Fragment>
     
      {AddCC('/css/profile.css')}
      {AddCC('https://netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css')}
      {AddCC('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css')}
  

    </React.Fragment>
  )
}

export default Profilefrontcss