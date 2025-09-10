"use client";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ContactForm = () => {

  const form = useRef();

  const sendEmail = async (e) => {

     e.preventDefault();
    emailjs.init('LX9svQrEVuINGePQm'); //BFRNhqWPmuA7Jz0cu

    emailjs
      .sendForm(
        'service_a5654uh', //service_lq0ik1m  
       'template_je41myo', //template_bd4i9bj
        form.current
      )
      .then(
        () => {
          Swal.fire({
            title: "Your message has been sent successfully!",
            text: "You clicked the button!",
            icon: "success"
          });

          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      //Email js ends here


    const formElement = e.target;
    // Debug - log form data
    const formData = new FormData(formElement);
    const payload = {
      customer_name: formData.get("user_name"),
      customer_email: formData.get("from_email"),
      message: formData.get("message"),
    };

    try {
      // Send data to your API endpoint
      const response = await fetch("https://alter-power.co.za/api/message/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        toast.error("Failed to post");
      } else {
        // If API call is successful, then send email
        await emailjs.sendForm(
          "service_lq0ik1m",
          "template_bd4i9bj",
          formElement
        );

        toast.success("Successfull");
        formElement.reset();
      }
    } catch (error) {
      // toast.error("Failed to upload");
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="font-semibold text-center text-xl text-[#D1A054]">
        ~~~~ Send Us a Message ~~~~
      </h1>
      <h1 className="border-t-2 border-b-2 border-cyan-700 text-center font-extrabold w-40 text-xl mx-auto mt-2 ">
        CONTACT FORM
      </h1>
      <div>
        {/* Form*/}
        <div className="bg-[#F3F3F3] dark:bg-zinc-800 p-12 my-12 rounded-lg lg:px-32 ">
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-2 gap-5 w-full">
              <input
                className="px-4 py-2 rounded-lg outline-none"
                name="user_name"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="px-4 py-2 rounded-lg outline-none"
                name="from_email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <textarea
              className="w-full rounded-lg mt-6  pl-2 pt-2 h-44"
              required
              name="message"
              id=""
              placeholder="Message"
            ></textarea>
            <input
              className="btn btn-primary text-white w-full"
              type="submit"
              value="Send Message"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
