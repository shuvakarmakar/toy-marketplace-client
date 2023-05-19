import { GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from 'react-icons/fa';
import Navbar from "../Home/Shared/Navbar/Navbar";

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        // SignIn Call
        signIn(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // Handle Google Signin
    const handleGoogleLogin = () => {
        signInWithGoogle(googleProvider)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="mr-10 w-1/2">
                        <img src="" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold">Login now!</h1>
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Login" className="btn btn-primary" />
                                </div>
                            </form>
                            <p className='my-4 text-center'>New to Toy World ? Please <Link className='text-amber-300' to='/signup'>Sign Up</Link></p>
                            <button onClick={handleGoogleLogin} className="btn btn-outline"><FaGoogle></FaGoogle> SignIn With Google</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;