import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../Home/Shared/Navbar/Navbar";

const Signup = () => {

    const { createUser } = useContext(AuthContext);

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleSignup = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        console.log(name, email, password, photo);

        // Validate
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please Add at least one UpperCase');
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please Add at least Two Number');
            return;
        }
        else if (password.length < 6) {
            setError('Please add at least 6 charecter in your password')
            return;
        }

        createUser(email, password)
            .then((result) => {
                const createUser = result.user;
                console.log(createUser);
                form.reset();
                setSuccess('SignUp Complete');
                Swal.fire('Sign Up Complete')
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <>
        <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-2xl font-bold">Signup Here!</h1>
                            <form onSubmit={handleSignup}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="Your Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Photo" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Sign Up" className="btn btn-primary" />
                                </div>
                            </form>
                            <p className='my-4 text-center'>Already Have an Account ? Please <Link className="text-amber-200" to='/login'>Login</Link></p>
                            <p className='text-error font-bold text-lg'>{error}</p>
                            <p className='text-success font-bold text-lg'>{success}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;