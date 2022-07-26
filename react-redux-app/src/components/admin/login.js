import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { login } from '../../redux/userSlice';
import './login.css'

const Login =()=>{
    
    let navigate = useNavigate();
    // const user = useSelector(state=>state);
    // console.log(user);
    const [userData , setUserData] =useState({email:"" , password:""}) 
    const dispatch = useDispatch();

    const handleChange = (e)=>{
        e.preventDefault()
        const value = e.target.value;
        setUserData({
          ...userData,
          [e.target.name]: value
        })
    }
    const handleSubmit=(e)=>{



        e.preventDefault()
        const value = e.target.value;
        setUserData({
            ...userData,
        })
        dispatch(login(userData))

        navigate("/main", { replace: true });
    }
    

    return(
        <div className='bod'>
          <div className='row'>
            <div className='col '></div>
            <div className='col p-5 m-2'>
            <div className="login-dark">
        <form onSubmit={handleSubmit} >
            <h2 className="sr-only m-2">Login</h2>
            <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>

            <div className="form-group">
                <input 
                className="form-control m-2"  
                type="email" 
                name="email" 
                placeholder="Email" 
                onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <input 
                className="form-control m-2" 
                type="password" 
                name="password" 
                placeholder="Password"  
                onChange={handleChange}
                />

            </div>
            <div className="form-group m-2">
                <button className="btn btn-primary btn-block" type="submit">Log In</button>
            </div>
            
        </form>
    </div>
            </div>
            <div className='col'></div>
          </div>
        </div>
    )
}

export default Login;