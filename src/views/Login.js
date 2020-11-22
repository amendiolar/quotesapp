import React from 'react';
import useForm from '../hooks/useForm';
import { useHistory} from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';


function Login(){

    let history = useHistory();
    const sendData = (data) =>{
        axios.post("http://ca35951931f4.ngrok.io/login",data)
         .then((response) =>{
             console.log(response.data)
             window.localStorage.setItem("token",response.data.token) // esto agrega algo nuevo a local storage
             history.push('/')
         })
         .catch((error) =>{
             alert(error.response.data.mesage)
         })
    }

    const { inputs, handleInputChange, handleSubmit } =useForm(sendData,{});

    return(
        <form onSubmit={handleSubmit}>
            <Navbar/>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                value={inputs.email}
                                onChange={handleInputChange}
                            >
                            </input>
                        </div>
                    </div>
                    <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                value={inputs.password}
                                onChange={handleInputChange}
                            >
                            </input>
                        </div>
                        <div className="col-md-12">
                        <button type="submit" className="btn btn-dark">iniciar</button>
                    </div>
                </div>
            </div>

        </form>
    )
}

export default Login;