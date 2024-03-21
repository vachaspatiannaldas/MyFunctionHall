import React, {  useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function JoinVendor() {


    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setCpassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!name || !email || !password) {
        // Show an error message or prevent form submission
        toast.error('Please fill in all fields');
        return;
      }
      const data = {
        name: name,
        email: email,
        password: password,
        confirm_password: confirm_password,
        usertype:"vendor"
      };
      console.log(data);
  
      if (password !== confirm_password) {
        // Passwords do not match
        toast.error('Passwords do not match. Please try again.', { autoClose: 3000 });
        return;
      }
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/registration', data);
        console.log(response);
        // const token = response.data[0].token;
        // localStorage.getItem('uid', token);
        navigate('/');
       // window.location.href="/login";
        toast.success('Vendor Registration Done', { autoClose: 3000 });
        setName('');
        setEmail('');
        setPassword('');
        setCpassword('');
        //console.log("Token:", token);
        setShowModal(false);
      } catch (error) {
        console.error(error);
      }
    };

    const [showModal, setShowModal] = useState(false);

    function closeModal() {
        setShowModal(false);
    }

  
  return (
 
    <div>
         <ToastContainer/>

         <div style={{ marginTop:"-12px" }} className="mr-2">
<button type="button"    className="btn btn-outline-light mt-2 ml-2" style={{ backgroundColor: "rgb(127, 1, 75)", color: "#fff" }}  onClick={() => setShowModal(true)}>


   Join As a Vendor
</button>
</div>                    
<div
  className={`modal fade ${showModal ? 'show d-block' : ''}`}
  id="exampleModal"
  tabIndex="-1"
  role="dialog"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Registration For Vendor</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
            </div>
            <div className="modal-body">

            <form onSubmit={handleSubmit}>

        <div class="form-group">
          <label for="">Name</label>
          <input type="text" name="name" id="" class="form-control" placeholder="Enter Name"  onChange={(e) => setName(e.target.value)}
                           value={name}  required />
        </div>

        <div class="form-group">
          <label for="">Email</label>
          <input type="text" name="email" id="" class="form-control" placeholder="Enter Email"  onChange={(e) => setEmail(e.target.value)}
          value={email} required/>
        </div>

        <div class="form-group">
          <label for="">Password</label>
          <input type="password" name="password" id="" class="form-control" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}
          value={password} required/>
        </div>

        <div class="form-group">
          <label for="">Confirm Password</label>
          <input type="password" name="cpassword" id="" class="form-control" placeholder="Enter Confirm Password" onChange={(e) => setCpassword(e.target.value)}
          value={confirm_password}required/>
        </div>




      </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" aria-label="Close" onClick={closeModal}>Close</button>
        <button type="submit"  className="btn btn-outline-light" style={{ backgroundColor: "rgb(127, 1, 75)", color: "#fff" }} onClick={handleSubmit}>Register For Vendor</button>

      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default JoinVendor