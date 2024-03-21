import React from 'react'

const Indexcss = () => {
    function AddCC(urlOfTheLibrary) {
        const script = document.createElement('link');
        script.href = urlOfTheLibrary;
        script.rel ="stylesheet";
        script.type="text/css";
        document.head.appendChild(script);
      }
  return (
    <React.Fragment>
     
     {/* {AddCC('CSS/bootstrap.min.css')} */}
      {AddCC('/CSS/font-awesome.min.css')}
      {AddCC('/CSS/elegant-icons.css')}
      {AddCC('/CSS/nice-select.css')} 
      {AddCC('/CSS/jquery-ui.min.css')}
      {AddCC('/CSS/owl.carousel.min.css')}
      {AddCC('/CSS/slicknav.min.css')}
      {/* {AddCC('/CSS/detail.css')} */}
      {AddCC('/CSS/detail1.css')}
      {AddCC('/CSS/gallary.css')}
        {/* {AddCC('/CSS/description.css')} */}
        {/* {AddCC('/CSS/description1.css')} */}
  

  
    
    
    </React.Fragment>
  )
}

export default Indexcss
