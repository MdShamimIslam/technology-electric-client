import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaEyeSlash,FaEye} from 'react-icons/fa';
import login from '../../assets/login.png';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const SignIn = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [errorMess, setErrorMess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // reset error
    setErrorMess("");

    signIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        e.target.reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Sign In successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        e.target.reset();
        setErrorMess(error.message)
        
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        console.log(user);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Sign In Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

    return (
        <div className="hero">
      <Helmet>
        <title>Sinrato || Sign In</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img className='md:w-3/4 lg:w-full mx-auto' src={login} alt="login-image" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-12">
          <div className="card-body ">
            <h1 className="text-4xl font-bold text-center">Sign In now!</h1>
            <div className="bg-slate-100 rounded-lg mt-2">
              {errorMess && (
                <p className="text-red-600 text-center p-2">
                 {errorMess}
                </p>
              )}
            </div>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-full"
                    required
                  />
                  <span
                    className="absolute top-4 right-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
              </div>
            </form>
            <div>
              <button onClick={handleGoogleSignIn} className="btn w-full my-4">
                <FcGoogle className="text-xl"></FcGoogle>
                Sign In with Google
              </button>
            </div>
            <p className="text-center">
              Don't have an account ?{" "}
              <Link className="text-lg text-blue-500" to="/signUp">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignIn;