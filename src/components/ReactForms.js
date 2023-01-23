import React, {useState} from "react";
import './csss/reactform.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function ReactForms() {

const [user, setUser] = useState({
    name:"",
    email:"",
    mobile:"",
    address:"",
    dob:"",
    country:""
});


const [records, setRecords] = useState([])



const handleInput = (e)=>{
    const name=e.target.name;
    const value = e.target.value;
    console.log(name,value);

    setUser({...user,[name]:value});


}


const handlesubmit=(e)=>{
    e.preventDefault();

    const newRecord ={...user,id: new Date().getTime().toString()};
    console.log(records);
    setRecords([...records,newRecord]);
    console.log(records);
    setUser({name:"",email:"",mobile:"",address:"", dob:"",country:""});


}





  return (
    <>

   
      <form action="" onSubmit={handlesubmit}>
      <h3>Ecourse Registration</h3>
        <div className="inputcontainer">
          <label htmlFor="name"> Fullname :</label>
          <input type="text" autoComplete="off" 
           value={user.name} 
           onChange={handleInput}
           name="name" id="name" 
           placeholder="Enter Your Name"

           />
        </div>
        <div className="inputcontainer">
          <label htmlFor="email">Email :</label>
          <input type="text"  autoComplete="off" 
          value={user.email}
          onChange={handleInput}
          name="email" id="email" 
          placeholder="Enter Your Email"
          />
        </div>

        <div className="inputcontainer">
          <label htmlFor="mobile">Mobile No :</label>
          <input type="tel"  autoComplete="off" 
          value={user.mobile}
          onChange={handleInput}
          name="mobile" id="mobile" 
          placeholder="Enter Mobile Number"
          />
        </div>

        
        <div className="inputcontainer">
          <label htmlFor="address">Address :</label>
          <textarea   autoComplete="off" 
           rows="2" cols="20"
          value={user.address}
          onChange={handleInput}
          name="address" id="address" 
          placeholder="Enter Address"
          />
        </div>


       
        

        
        <div className="inputcontainer">
          <label htmlFor="dob" >Date of birth : </label>
          <input type="date"  autoComplete="off"
           value={user.dob}
           onChange={handleInput}
           name="dob" id="dob" />
        </div>
        <div className="inputcontainer">
          <label htmlFor="country">Country :</label>

          <select  id="country" name="country" value={user.country} onChange={handleInput} >
          <option>Country :</option>
            <option selected>India</option>
            <option >US</option>
            <option >UK</option>
            <option >Russia</option>
          </select>
        </div>
        <div id="btncontainer">
        <button type="submit" className="btn btn-success btn lg"  >Submit</button>
        </div>
      </form>


      <div>
        {
            records.map((curElm)=>{

                const {id, name,email,mobile,address,dob,country} =curElm;
                return(
                    <div className="showDataStyle" key ={id}>
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{mobile}</p>
                    <p>{address}</p>
                    <p>{dob}</p>
                    <p>{country}</p>
                    </div>
                )
            })
        }
      </div>



      
    </>
  );
}

export default ReactForms;
