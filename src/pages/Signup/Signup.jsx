import { Link, useNavigate} from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../authProvider/AuthProvider';
import Swal from 'sweetalert2';


const Signup = () => {
    const {signup} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleForm = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const name = e.target.name.value;
        // const loginInfo = {
        //     name,
        //     email,
        //     password

        // }
        signup(email, password)
        .then(()=>{
            navigate('/');
        })
        .catch(()=>{
            Swal.fire("An Error Occured! Try Again..");
        })
    }
    return (
        <div className="hero bg-base-200 py-10 rounded-lg">
            
            <div className="hero-content gap-10 flex-col lg:flex-row">
           
                <div className="flex-1">
                    <img src={loginImg} alt="" />
                </div>
                <div className=" flex-1 card bg-base-100 shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleForm}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Sign Up" className='text-white btn bg-[#FF3811]' />
                        </div>
                    </form>
                    <div className='text-center pb-10'>
                        <h1>Have already an account ? please <Link to="/login"><span className='text-blue-500'>Login</span></Link> </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup