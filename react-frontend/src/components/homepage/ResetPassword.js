import React from 'react'

import { useState } from 'react'

import { setNewPasswordCall } from '../../services/AuthService';

import { SpinnerLoading } from '../utils/SpinnerLoading';


export const ResetPassword = () => {

    const [username, setUsername] = useState('');

    const [newPassword, setNewPassword] = useState('');

    const [changeToken, setChangeToken] = useState('')

    const [isLoading, setIsLoading] = useState(false);

    const [resetSuccess, setResetSuccess] = useState(false);

    const [requestFailure, setResetFailure] = useState(false);


    async function handlePasswordReset(e) {



        e.preventDefault();

        setIsLoading(true)

        const changePasswordObject = { username, changeToken, newPassword }

        await setNewPasswordCall(changePasswordObject).then((response) => {
            console.log(response.data);
            setResetSuccess(true)
            setIsLoading(false)

        }).catch(error => {
            console.error(error);
            setResetFailure(true);
            setIsLoading(false);
        })

    }






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

                                <img class="card-img-top" src={`${process.env.PUBLIC_URL}/reset-password.svg`}
                                    height="100"
                                    width="100"
                                    alt='Missing image' />
                                <div className='card-header'>
                                    <h3 className='text-center'> Neues Passwort </h3>
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
                                                    placeholder='username'
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                >
                                                </input>
                                            </div>
                                        </div>

                                        <div className='row mb-3'>
                                            <label className='col-md-3 control-label'> Change Token </label>
                                            <div className='col-md-9'>
                                                <input
                                                    type='text'
                                                    name='changeToken'
                                                    className='form-control'
                                                    placeholder='Change Token'
                                                    value={changeToken}
                                                    onChange={(e) => setChangeToken(e.target.value)}
                                                >
                                                </input>
                                            </div>
                                        </div>

                                        <div className='row mb-3'>
                                            <label className='col-md-3 control-label'> Neues Passwort </label>
                                            <div className='col-md-9'>
                                                <input
                                                    type='password'
                                                    name='password'
                                                    className='form-control'
                                                    placeholder='Neues Passwort'
                                                    value={newPassword}
                                                    onChange={(e) => setNewPassword(e.target.value)}
                                                >
                                                </input>
                                            </div>
                                        </div>

                                        <div className="col-md-6 offset-md-6">
                                            <div className='form-group mb-3'>
                                                <button className='btn btn-primary' onClick={(e) => handlePasswordReset(e)}>Submit</button>

                                            </div>

                                        </div>




                                    </form>

                                    {isLoading &&
                                        <SpinnerLoading></SpinnerLoading>
                                    }

                                    {resetSuccess &&
                                        <div className="alert alert-success" role="alert">
                                            <p>Successfully changed Password</p>
                                        </div>

                                    }

                                    {requestFailure &&

                                        <div className="alert alert-danger" role="alert">
                                            <p> Something went wrong. Please check your details.</p>
                                        </div>


                                    }

                                </div>

                            </div>
                        </div>

                    </div>


                </div>


            </div>


        </div>

    )
}
