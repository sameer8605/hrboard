import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login  = ()=>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate  = useNavigate()
    function handleSubmit(e){
     e.preventDefault()
     if(email =="admin" && password =="admin"){
        navigate('/home')
     }
    }
    function handleEmail(e){
        setEmail(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }
    return(
<form onSubmit={handleSubmit}>
    <div className="d-flex justify-content-center mt-4 ">
    <dl>
        <dt>Email</dt>
        <dd className="py-2">
<input type="text" className="form-control " name = "email" value={email} onChange={handleEmail}/>
        </dd>
        <dt>Password</dt>
        <dd className="py-2">
            <input type="password" className="form-control" name = "password" password = {password} onChange={handlePassword}/>
        </dd>
        <div>
            <button  type="submit" className="btn btn-primary">Submit</button>
        </div>
    </dl>
    </div>
    
</form>
    )
}
export default Login;