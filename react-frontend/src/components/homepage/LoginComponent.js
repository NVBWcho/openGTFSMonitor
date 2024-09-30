import { useState } from "react";
import { loginAPICall, testCors } from "../../services/AuthService";

import { storeToken } from "../../services/AuthService";

import { saveLoggedInUser } from "../../services/AuthService";

import { checkAdminRight } from "../../services/ResistrictedCalls";

import { getLoggedInUser } from "../../services/AuthService";

import { saveUserRole } from "../../services/AuthService";

import { getLogginUserRole } from "../../services/AuthService";

import { useEffect } from "react";
import { useHistory } from 'react-router-dom';



export const LoginComponent = () => {
    const history=useHistory();

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const loginSuccessMessage = "You have successfully logged in"

    const [loginFailureMessage] = "The username and password combination you entered are incorrect. Please check that you are registered and that your account is active"

    const [loginSuccess, setLoginSuccess] = useState(false);

    const [loginFailure, setLoginFailure] = useState(false);


    async function handleLoginForm(e) {

        e.preventDefault();

        await loginAPICall(username, password).then((response) => {
            Object.keys(response.headers).forEach(header => {
                console.log(header, response.headers[header]);
            });


            //const token = 'Basic ' + window.btoa(username + ":" + password);
            const authorizationHeader = response.headers['authorization'];
            const authArray = authorizationHeader.split(" ");
            //const token=authorizationHeader;
            //console.log(authArray)
            const token = 'Bearer ' + authArray[1];
            storeToken(token);
            console.log(token)

            saveLoggedInUser(username);

            setLoginSuccess(true)
            setLoginFailure(false)

            setTimeout(() => {
                window.location.reload(false);
            }, 2000);


        }).catch(error => {
            console.error(error);
            setLoginFailure(true)
        })

      



    }

    useEffect(() => {

        if (loginSuccess) {
            setTimeout(() => {
              history.push('/landingPage');
            }, 2000);
          }
      
    }, [loginSuccess,history])


    useEffect(() => {
        const fetchRole=async()=>{
            try {
            const res=await checkAdminRight(getLoggedInUser());
            const currentRole=res.data;
            saveUserRole(currentRole)
            console.log(getLogginUserRole())
            }catch(err){
                saveUserRole('user')
            }
        }

        fetchRole();
    }, [loginSuccess])
    


   

 
    

    
    





    return (

        <div className='container'>
            <br /> <br />
            <div className='row'>


                <div class="row">
                    {/* <div class="col-md-7 offset-md-1">
                    <div className='col-md-7 offset-md-1'>
                    <div className='card'>
                        <div className='card-header'>
                            <h2 className='text-center'> Login </h2>
                        </div>

                        <div className='card-body'>
                            <form>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'> Username </label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='username'
                                            className='form-control'
                                            placeholder='Enter username'
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'> Password </label>
                                    <div className='col-md-9'>
                                        <input
                                            type='password'
                                            name='password'
                                            className='form-control'
                                            placeholder='Enter password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                </div>

                                <div className="col-md-6 offset-md-6">
                                    <div className='form-group mb-3'>
                                        <button className='btn btn-primary' onClick={(e) => handleLoginForm(e)}>Submit</button>

                                    </div>

                                </div>




                            </form>

                            {loginSuccess &&
                                <div className="alert alert-success" role="alert">
                                    <p>{loginSuccessMessage}</p>
                                </div>

                            }

                            {loginFailure &&

                                <div className="alert alert-danger" role="alert">
                                    {loginFailureMessage}
                                </div>


                            }

                        </div>

                    </div>
                </div>
                    </div> */}

                    <div className="row justify-content-center">
                        <div className="col-4">
                            <div className='card'>
                                
                                    <img class="card-img-top" src={`${process.env.PUBLIC_URL}/password-svgrepo-com.svg`}
                                        height="100"
                                        width="100"
                                        alt='Missing image' />
                                    <div className='card-header'>
                                        <h3 className='text-center'> Login </h3>
                                    </div>
                                

                                <div className='card-body'>
                                    <form>

                                        <div className='row mb-3'>
                                            <label className='col-md-3 control-label'> Username </label>
                                            <div className='col-md-9'>
                                                <input
                                                    type='text'
                                                    name='username'
                                                    className='form-control'
                                                    placeholder='Enter username'
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                >
                                                </input>
                                            </div>
                                        </div>

                                        <div className='row mb-3'>
                                            <label className='col-md-3 control-label'> Password </label>
                                            <div className='col-md-9'>
                                                <input
                                                    type='password'
                                                    name='password'
                                                    className='form-control'
                                                    placeholder='Enter password'
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                >
                                                </input>
                                            </div>
                                        </div>

                                        <div className="col-md-6 offset-md-6">
                                            <div className='form-group mb-3'>
                                                <button className='btn btn-primary' onClick={(e) => handleLoginForm(e)}>Submit</button>

                                            </div>

                                        </div>




                                    </form>

                                    {loginSuccess &&
                                        <div className="alert alert-success" role="alert">
                                            <p>{loginSuccessMessage}</p>
                                        </div>

                                    }

                                    {loginFailure &&

                                        <div className="alert alert-danger" role="alert">
                                            Login Failed. Check username and password
                                        </div>


                                    }

                                </div>

                            </div>
                        </div>

                    </div>


                </div>


            </div>


        </div>

    );
}