import React, { useContext, useState } from 'react';
import loginImg from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import SocileLogin from './SocileLogin';

const Loging = () => {
    const [error, setError] = useState('')
    const { signIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"
    const loginUser = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        setError('')
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })
                Swal.fire({
                    title: 'Success!',
                    text: 'login successfull',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(err => {
                console.log(err.message)
                setError(err.message)
            })
        console.log(email, password)
    }
    return (
        <div className="hero min-h-screen mb-10 md:mb-28 bg-base-200">
            <div className="hero-content  gap-28 flex-col lg:flex-row">
                <div className=" lg:w-1/2">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold">Login now!</h1>
                        <form onSubmit={loginUser}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    {
                                        error && <p className='text-red-700'>{error}</p>
                                    }
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-warning" type="submit" value="Login" />
                            </div>
                            <SocileLogin></SocileLogin>
                            <p className='mt-4'>Have an account? <Link to='/signup' className='text-red-600 font-bold'>Sign up</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loging;