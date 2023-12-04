import React, { useRef } from 'react';
import contact from '../../assets/contact.jpg';
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';

const Contact = () => {

    const form = useRef();

  const serviceId = "service_vocrohv";
  const templateId = "template_ny0t2we";
  const publicKey = "slljjTZw_AUfrVERR";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        e.target.reset();
        Swal.fire({
          title: "Message Send Successfully",
          width: 600,
          padding: "3em",
          color: "#716add",
          background: "#fff url(/images/trees.png)",
          backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `
        });
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

    return (
        <div className=' mb-16 text-center'>
            <h2 className='md:text-4xl text-primary text-2xl font-semibold'>Contact Us</h2>
            <div className='flex lg:flex-row flex-col items-center justify-between lg:mt-16 md:mt-2 gap-10 md:p-0 p-4'>
                <div>
                    <img className='rounded-lg lg:block hidden h-[320px]' src={contact} alt="contact-image" />
                </div>
                <form ref={form} onSubmit={sendEmail} className='space-y-5'>
                <input type="text"  name="from_name" placeholder="your name" className="input input-bordered input-info w-full" />
                <input type="email"  name="from_email" placeholder="your email" className="input input-bordered input-info w-full" />
                <textarea name="message" className="textarea textarea-info w-full h-[100px]" placeholder="Say something...."></textarea>
                <button className="btn bg-cyan-700 w-full">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;