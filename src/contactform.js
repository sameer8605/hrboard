import { useState } from 'react';
import classes from './contactform.module.css'

const ContactForm = ()=>{
    const [formData,setFormData] = useState({
     street1 : "",
     street2 :"",
     city : "",
     state :"",
     pincode:"",
     country :"",
     home :"",
     mobile :"",
     work:"",
     email:"",
     otheremail:""
    })
    const[submittedData,setSubmittedData] = useState(null)
    const accessToken1 = process.env.REACT_APP_ACCESS_TOKEN;
    console.log("accessToken1",accessToken1)
    const [accessToken, setAccessToken] = useState(accessToken1);

    const  handleChange = async(e)=>{
        console.log("my event is" ,e.target.name)
        let {name,value} = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }
    const  handleSubmit = async(e)=>{
e.preventDefault();
console.log("the form data is", formData)
try{
const res = await fetch("https://gorest.co.in/public/v2/users",{
    method : 'POST',
    headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${accessToken}`
    },
    body:JSON.stringify(formData)
})
const results = await res.json()
console.log(results)
}catch(error){
console.error('Error',error)
}

    }
return(
<div className={classes.body}>
    
    <form className='d-flex justify-content-between' onSubmit={handleSubmit}>
    <div style={{border:'1px solid black',width:'227px',height:'600px',borderRadius:'15px'}}>
        <div>
            <h5 className='text-center mt-3 ' style={{width:'80px',marginLeft:'70px'}}>Chahal Vadalmiya</h5>
            <div className='d-flex justify-content-center my-3'>
            <div className={classes.imageprofile}>
                <img src='/images/user.jpg' alt='profile' width='109px' height='109px' style={{borderRadius:'109px'}}/>
            </div>
            </div>
            <div className={classes.formdetail}>
                <ul className='ml-4'>
                <li>Personla Detail</li>
                <li>Contact Detail</li>
                <li>Emergency Contact</li>
                <li>Dependent</li>
                <li>Immigration</li>
                <li>Job</li>
                <li>Salary</li>
                <li>Report-To</li>
                <li>Qualification</li>
                </ul>
               

            </div>
        </div>
    </div>
    <div style={{width:'670px',color:'rgb(146, 143, 143);'}}>
    <h6 className='p-2 mb-0'>Contact Detail</h6>
    <hr className='my-0'/>
    <p className='mx-2 mt-1'>Address</p>
    <hr className='my-0'/>
        <div className='d-flex justify-content-around my-4'>
            <div>
            <label className='form-label'>Street 1</label>
            <input type='text' className='form-control' name='street1' onChange={handleChange} value={formData.street1}/>
            </div>
            <div>
            <label className='form-label'>Street 2</label>
            <input type='text' className='form-control' name='street2' onChange={handleChange} value={formData.street2}/>
            </div>
            <div>
            <label className='form-label'>City</label>
            <input type='text' className='form-control' name='city' onChange={handleChange} value={formData.city}/>
            </div>
        
        </div>
        <div className='d-flex justify-content-around my-4'>
            <div>
            <label className='form-label'>State Province</label>
            <input type='text' className='form-control' name='state' onChange={handleChange} value={formData.state}/>
            </div>
            <div>
            <label className='form-label'>Postal Code</label>
            <input type='number' className='form-control' name='pincode' onChange={handleChange} value={formData.pincode}/>
            </div>
            <div>
            <label className='form-label' name = "country">Country</label>
            <select className='form-select' onChange={handleChange} name = "country" value={formData.country}>
                <option value="">Select country</option>
                <option value ="india">India</option>
                <option value="australia">Australia</option>
            </select>
            </div>
        </div>
    <p className='mx-2 mt-1'>Telephone</p>
    <hr className='my-0'/>
    <div className='d-flex justify-content-around my-4'>
            <div>
            <label className='form-label' >Home</label>
            <input type='number' className='form-control' name="home" onChange={handleChange} value={formData.home}/>
            </div>
            <div>
            <label className='form-label' >Mobile</label>
            <input type='number' className='form-control' name = "mobile" onChange={handleChange} value={formData.mobile}/>
            </div>
            <div>
            <label className='form-label' >Work</label>
            <input type='number' className='form-control' name = "work" onChange={handleChange} value={formData.work}/>
            </div>
        
        </div>
        <div className='d-flex justify-content-around my-4 w-75'>
            <div>
            <label className='form-label' >Work Email</label>
            <input type='email' className='form-control' name = "email" onChange={handleChange} value={formData.email}/>
            </div>
            <div>
            <label className='form-label' >Other Email</label>
            <input type='email' className='form-control' name="otheremail" onChange={handleChange} value={formData.otheremail} />
            </div>

            
            
        
        </div>
        <div className='d-flex justify-content-end'>
            <button className=' btn btn-primary mx-2' type='submit'>Save</button>
        </div>
    </div>
    </form>
    
</div>
)
}
export default ContactForm;