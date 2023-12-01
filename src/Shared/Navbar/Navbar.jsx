import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import userImage from "../../assets/user.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Sign Out successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink className="md:text-lg " to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="md:text-lg" to="/addProduct">
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink className="md:text-lg" to="/myCart">
          My Cart
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 mt-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="flex items-center justify-center">
          <img className="w-[80px]" src={logo} alt="website-logo" />
          <h2 className="text-4xl font-bold -ml-4">
            <span className="text-cyan-500">S</span>inrato
          </h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
            {user ? (
              <label
                tabIndex={0}
                data-tip={user?.displayName}
                className="btn btn-ghost btn-circle avatar mr-2 tooltip"
              >
                <div className="w-12  rounded-full">
                  <img alt="user-image" src={user?.photoURL} />
                </div>
              </label>
            ) : (
              <label
                tabIndex={0}
                data-tip="No User"
                className="btn btn-ghost btn-circle avatar mr-2 tooltip"
              >
                <div className="w-12  rounded-full">
                  <img alt="user-image" src={userImage} />
                </div>
              </label>
            )}

            {user ? (
              <button
                onClick={handleSignOut}
                className="btn text-lg font-medium"
              >
                Sign Out
              </button>
            ) : (
              <button className="btn text-lg font-medium">
                <Link to="/signIn">Sign In</Link>
              </button>
            )}
          </div>
    </div>
  );
};

export default Navbar;
