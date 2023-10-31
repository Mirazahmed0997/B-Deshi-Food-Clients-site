import React from 'react';
import { Link } from 'react-router-dom';
import signupIMG from '../../assets/signupIMG1.png'
import { useForm } from 'react-hook-form';





const SignUp = () => {


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }



    // const handleSignUp = (event) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const email = form.email.value
    //     const password = form.password.value
    //     const name = form.name.value
    //     console.log(email, password, name)



    // }


    return (
        <div className="hero min-h-screen bg-red-500 ">
            <div className="hero-content flex-col lg:flex-row md:flex mt-24">
                <div className="text-center md:w-1/2 lg:text-left mx-16 shadow-2xl">

                    <img className='' src={signupIMG} alt="" />

                </div>
                <div className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form className='card-body' onSubmit={handleSubmit(onSubmit)}>

                        {/* NAME FIELD */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" {...register("name", { required: true })} name='name' className="input input-bordered" />
                            {errors.name && <span className='text-red-500'>This field is required</span>}

                        </div>

                        {/* EMAIL FIELD */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email"{...register("email", { required: true })} name='email' className="input input-bordered" />
                            {errors.email && <span className='text-red-500'>This field is required</span>}
                        </div>


                        {/* PASSWORD FIELD */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password"{...register("password", { required: true }, {

                                minLength: 6,
                                maxLength: 20,
                                pattern:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])$/

                            })} name='password' className="input input-bordered" />
                            {errors.password?.type === 'required' && <span className='text-red-500'>This field is required</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-500'>Atleast 6 characters</span>}
                            {errors.password?.type === 'maxLength' && <span className='text-red-500'>Atleast 6 characters</span>}
                            {errors.password?.type === 'pattern' && <span className='text-red-500'>Password must have one uppercase, one lowercase and special character</span>}

                        </div>


                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type='submit' value='Login'></input>
                        </div>
                    </form>
                    <p className='text-center mb-2'><small>Have an Account? <Link className='text-red-500' to='/login'>Login </Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;