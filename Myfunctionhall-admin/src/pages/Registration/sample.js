import axios from 'axios'
import React, { useState } from 'react'

function Insert() {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirm_password,setCpassword]=useState('');
    
    function handleSubmit(e) {
        const data ={
            name:name,
            email:email,
            password:password,
            confirm_password:confirm_password
        }
        e.preventDefault();
        console.log(data);
       
        const config = {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
          }
        };
        // const config = {
        //     headers: {
        //       'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        //     },
        //   };
       
      
      axios.get('sanctum/csrf-cookie').then(() => {
        axios.post('http://127.0.0.1:8000/api/register',data,config)
        .then((res) =>{
          console.log(res);
          //alert("Subject added successfully");
          const data = res.data;
          if(data.status==="success")
          window.location.href = "/";
          else{
           console.log("Error");
           window.location.href = "/";

          }

        })
      })
    }

    
  return (
    <React.Fragment>
        <div class="container">
        <form onSubmit={handleSubmit}>
        <h2>ADD Register</h2>
          <div class="form-group">
          <label for="">name</label>
          <input type="text" name="name" id="" class="form-control" placeholder="" onChange={name=>setName(name.target.value)} value={name}/>
        </div>
        <div class="form-group">
          <label for="">email</label>
          <input type="text" name="email" id="" class="form-control" placeholder="" onChange={email=>setEmail(email.target.value)} value={email}/>
        </div>
        <div class="form-group">
          <label for="">password</label>
          <input type="text" name="password" id="" class="form-control" placeholder="" onChange={password=>setPassword(password.target.value)} value={password}/>
        </div>

        <div class="form-group">
          <label for="">confirm_password</label>
          <input type="text" name="confirm_password" id="" class="form-control" placeholder="" onChange={confirm_password=>setCpassword(confirm_password.target.value)} value={confirm_password}/>
        </div>
        <button type="button" class="btn btn-info" onClick={handleSubmit}>Submit</button>
       </form>
        </div>

    </React.Fragment>
  )
}

export default Insert