import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../ContextProviders/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn}=useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn=()=>
    {
        googleSignIn()
        .then(result=>{
            const loggedInUser=result.user;
            const savedUser={name:loggedInUser.displayName,email:loggedInUser.email}
            console.log(loggedInUser)

            fetch('http://localhost:5000/users',{
                        method:'POST',
                        headers:{
                            'content-type':'application/json'
                        },
                        body:JSON.stringify(savedUser)
                    })
                    .then(res=>res.json())
                    .then(()=>
                        {
                           
                                navigate('/');
                            
                        })
        })
    }
    return (
        <div>
            <div className="divider"></div>
            <div className='w-full text-center my-4'>
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline ">
                    <FaGoogle></FaGoogle>
                </button> 
            </div>

        </div>
    );
};

export default SocialLogin;