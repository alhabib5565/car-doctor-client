import React, { useContext, useState } from 'react';
import loginImg from '../../assets/images/login/login.svg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import SocileLogin from './SocileLogin';
const SignUp = () => {
    const [error, setError] = useState('')

    const navigate = useNavigate()
    const {userCreate} = useContext(AuthContext)
    const createUser = (event) => {
        event.preventDefault()
        const form = event.target 
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        setError('')
        userCreate(email, password)
        .then(result => {
            Swal.fire({
                title: 'Success!',
                text: 'User Creatse successfull',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              console.log(result)
              navigate('/login')
        })
        .catch(err => {
            setError(err.message)
            console.log(err.message)
        })
        // console.log(name, email, password)
    }
    return (
        <div className="hero min-h-screen mb-10 md:mb-28 bg-base-200">
            <div className="hero-content  gap-28 flex-col lg:flex-row">
                <div className=" lg:w-1/2">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                        <form onSubmit={createUser}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    {
                                        error && <p className='text-red-700'>{error}</p>
                                    }
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-warning" type="submit" value="Sing Up" />
                            </div>
                            <SocileLogin></SocileLogin>
                            <p className='mt-4'>Already Have An Account? <Link to='/login' className='text-red-600 font-bold'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;