import React from 'react';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Include Sweetalert
import Swal from 'sweetalert2'
//axios for api request
import axios from 'axios';
class Emailex extends React.Component {
  constructor(props)
    {
      super(props);
      this.addFormData = this.addFormData.bind(this);
    }
  // Mail Form Submission
  addFormData(evt)
    {
      evt.preventDefault();
      const fd = new FormData();
      fd.append('myUsername', this.refs.myUsername.value);
      fd.append('myEmail', this.refs.myEmail.value);
      fd.append('textquery', this.refs.textquery.value);
      
      axios.post('http://localhost/laravel8/public/api/send/email', fd
      ).then(res=>
      {
 
    this.myFormRef.reset();
    //Success Message in Sweetalert modal
    Swal.fire({
      title: 'Hurray!!',
      text: "Mail has been send successfully.",
      type: 'success',
      
    });
    
    }
    );
    }
 
  render() {
   
    return (
    
      <div className="maincontainer">
        
        
        <div className="container mb-5 mt-5 text-left">
        
        <form ref={(el) => this.myFormRef = el}>
        <div className="form-group">
        <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email" ref="myEmail" />
        
        </div>
        <div className="form-group">
        <input type="text" className="form-control" id="Username" placeholder="Enter Username" ref="myUsername" />
        </div>
        <div className="form-group">
        <textarea className="form-control" id="textquery" placeholder="Enter Query" ref="textquery"></textarea>
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.addFormData}>Send Mail</button>
      </form>
       
            
      </div>
     
      </div>
      
)
};
}
export default Emailex;