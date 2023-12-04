import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';
import signup from '../../assets/signup.png';
import { FaEyeSlash,FaEye} from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => {
    const { createUser, profileUpdate, googleSignIn,logOut } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [errorMess, setErrorMess] = useState("");
    const [showPassword, setShowPassword] = useState(false);
  
    const handleSignUp = (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const photoURL = e.target.photo.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
  
      // reset error
      setErrorMess("");
  
      // password validation
      // /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  
      if (password.length < 6) {
        setErrorMess("Password must be at least six characters");
        return;
      } else if (!/[A-Z]/.test(password)) {
        setErrorMess("Password must be at least one uppercase character");
        return;
      } else if (!/[a-z]/.test(password)) {
        setErrorMess("Password must be at least one lowercase character");
        return;
      } else if (!/[0-9]/.test(password)) {
        setErrorMess("Password must be at least one digit of number");
        return;
      } else if (!/[#?!@$%^&*-]/.test(password)) {
        setErrorMess("Password must be at least one special character");
        return;
      }
  
      createUser(email, password)
        .then((res) => {
          const user = res.user;
          console.log(user);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created successfully",
            showConfirmButton: false,
            timer: 1500,
          });
  
          profileUpdate(name, photoURL)
            .then(() => {
              e.target.reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Profile updated successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(location?.state ? location.state : '/');
              logOut();
            })
            .catch((error) => console.error(error));
           
        })
        .catch((error) => {
          console.error(error);
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
      <div className="hero mb-8 mt-12">
        <Helmet>
          <title>Sinrato || Sign Up</title>
        </Helmet>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left ml-20">
            <img className='w-3/4 lg:w-full mx-auto' src={signup} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-8">
            <div className="card-body">
              <h1 className="text-4xl font-bold text-center">Sign Up now!</h1>
              <div className="bg-slate-100 rounded-lg mt-2">
                {errorMess && (
                  <p className="text-red-600 text-center p-2">
                    Error : {errorMess}
                  </p>
                )}
              </div>
              <form onSubmit={handleSignUp}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign Up</button>
                </div>
              </form>
              <div>
                <button onClick={handleGoogleSignIn} className="btn w-full my-4">
                  <FcGoogle className="text-xl"></FcGoogle>
                  Sign In with Google
                </button>
              </div>
              <p className="text-center">
                Already have an account ?
                <Link className="text-lg text-blue-500" to="/signIn">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default SignUp;