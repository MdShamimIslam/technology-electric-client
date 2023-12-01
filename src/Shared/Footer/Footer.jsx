import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook,FaTwitter,FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className=' p-10 bg-base-200 text-base-content'>
      <footer className="footer">
        <aside>
          <Link to='/'>
          <img className="w-24" src={logo} alt="website-logo" />
          </Link>
          <p>
            <span className="lg:text-2xl md:text-xl text-lg font-semibold">
              <span className="text-cyan-500">S</span>inrato Industries Ltd.
            </span>
            <br />
            <span className="mt-2">
              Providing reliable tech since 2020
            </span>
          </p>
        </aside>
        <nav>
          <header className="footer-title">Get In Touch</header>
          <p>Email : shamim401897@gmail.com</p>
          <p>Phone : 01738740639</p>
          <p>Address : Jamal,Sundargonj,Gaibandha</p>
        </nav>
        <nav>
          <header className="footer-title">Find On</header>
          <Link to="/" className="text-xl flex items-center gap-4">
            <FaFacebook></FaFacebook> <FaTwitter></FaTwitter>
            <FaLinkedin></FaLinkedin>
          </Link>
        </nav>
      </footer>
      <aside  className='text-center mt-16'>
    <small>Copyright © 2023 - All right reserved by Muhammad Shamim Islam</small>
  </aside>
    </div>
    );
};

export default Footer;