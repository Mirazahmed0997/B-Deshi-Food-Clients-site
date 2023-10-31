import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../ContextProviders/AuthProvider';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/loginImg.gif'

const Login = () => {

    const captchaRef=useRef(null);
    const [disabled,setDisabled]=useState(true)

    const {signIn}=useContext(AuthContext)

    useEffect(() => {
        loadCaptchaEnginge(4);
    }, [])

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value

        signIn(email,password)
        .then(res=>res.json())
        .then(result=>{
            const user= result.user
            console.log(user)
        })

    }

    const handleValidateCaptcha=()=>
    {
        const captchaValue= captchaRef.current.value;
        if(validateCaptcha(captchaValue))
        {
            setDisabled(false)
        }
    }
    return (
        <div className="hero min-h-screen bg-red-200 ">
            <div className="hero-content flex-col lg:flex-row md:flex mt-24">
                <div className="text-center md:w-1/2 lg:text-left mx-16">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                            {/*react captcha */}

                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" ref={captchaRef} placeholder="Type the text above" name='captcha' className="input input-bordered" required />
                            <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'>Validate</button>
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} className="btn btn-primary" type='submit' value='Login'></input>
                        </div>
                    </form>
                    <p className='text-center mb-2'><small>Don't have an Account? <Link className='text-red-500' to='/signup'>create an account </Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;