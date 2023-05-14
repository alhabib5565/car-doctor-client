import React, { useContext } from 'react';
import { FaFacebookF } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const SocileLogin = () => {
    const {googleLogin} = useContext(AuthContext)
    const signInWithGoogle = () => {
        googleLogin()
        .then(result => {
            console.log(result)
            Swal.fire({
                title: 'Success!',
                text: 'sing in with google',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className='flex justify-center gap-5'>
                <button className="btn btn-circle btn-outline btn-primary">
                    <FaFacebookF className='text-xl'></FaFacebookF>
                </button>
                <button onClick={signInWithGoogle} className="btn btn-circle bg-white hover:bg-slate-200">
                    <FcGoogle className='text-xl'></FcGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocileLogin;