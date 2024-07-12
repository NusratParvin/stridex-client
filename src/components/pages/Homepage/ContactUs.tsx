// import { useState } from "react";
// import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faPhone, faPen } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   setFormData({ name: "", email: "", message: "" });
  // };

  return (
    // <section className="py-8">
    //   <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
    //   <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
    //     <div className="mb-4">
    //       <label className="block text-gray-700 mb-2">Name</label>
    //       <input
    //         type="text"
    //         name="name"
    //         value={formData.name}
    //         onChange={handleChange}
    //         className="w-full px-4 py-2 border rounded-lg"
    //         required
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label className="block text-gray-700 mb-2">Email</label>
    //       <input
    //         type="email"
    //         name="email"
    //         value={formData.email}
    //         onChange={handleChange}
    //         className="w-full px-4 py-2 border rounded-lg"
    //         required
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label className="block text-gray-700 mb-2">Message</label>
    //       <textarea
    //         name="message"
    //         value={formData.message}
    //         onChange={handleChange}
    //         className="w-full px-4 py-2 border rounded-lg"
    //         required
    //       ></textarea>
    //     </div>
    //     <button
    //       type="submit"
    //       className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
    //     >
    //       Send Message
    //     </button>
    //   </form>
    // </section>

    <section className="bg-gray-100 py-12 mt-12">
      <div className="md:w-10/12 w-full mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Contact Information */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h4 className="text-2xl tracking-widest text-left pb-4">
              CONTACT US
            </h4>
            <h2 className="text-5xl font-semibold mb-8 uppercase">
              <p>Have Questions?</p>
              <p>Get in Touch!</p>
            </h2>

            <ul className="text-xl">
              <li className="flex items-center mb-4">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="w-6 h-6 text-red-600 mr-3"
                />
                785 15th Street, Office 478 Berlin
              </li>
              <li className="flex items-center mb-4">
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  className="w-6 h-6 text-red-600 mr-3"
                />
                +1 800 555 25 69
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-6 h-6 text-red-600 mr-3"
                />
                strideX@email.com
              </li>
            </ul>
          </div>
          {/* Contact Form */}
          <div className="w-full md:w-1/2 mt-6 bg-white/80 pt-4">
            <h2 className="text-5xl font-semibold mb-8 text-center uppercase">
              <p>Contact Form</p>
            </h2>
            <form className="px-8 pt-6 pb-8 mb-4">
              <div className="mb-8 flex items-center md:flex-row flex-col gap-6">
                <div className="flex items-center border-b-2 w-full">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-gray-700 mr-3"
                  />
                  <input
                    className="bg-transparent w-full py-1 px-3 text-gray-700 leading-tight"
                    id="name"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="flex items-center border-b-2 w-full">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-gray-700 mr-3"
                  />
                  <input
                    className="bg-transparent w-full py-1 px-3 text-gray-700 leading-tight"
                    id="email"
                    type="email"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="mb-8 flex items-center  md:flex-row flex-col gap-6">
                <div className="flex items-center border-b-2 w-full">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-gray-700 mr-3"
                  />
                  <input
                    className="bg-transparent w-full py-1 px-3 text-gray-700 leading-tight"
                    id="phone"
                    type="text"
                    placeholder="Phone"
                  />
                </div>
                <div className="flex items-center border-b-2 w-full">
                  <FontAwesomeIcon
                    icon={faPen}
                    className="text-gray-700 mr-3"
                  />
                  <input
                    className="bg-transparent w-full py-1 px-3 text-gray-700 leading-tight"
                    id="subject"
                    type="text"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="flex items-start border-b-2 w-full mb-8">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-gray-700 mr-3 pt-1"
                />
                <textarea
                  className="bg-transparent w-full  px-3 text-gray-700 leading-tight"
                  id="message"
                  placeholder="How can we help you? Feel free to get in touch!"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="bg-red-600 text-white py-2 px-8 hover:bg-red-700 transition duration-300 text-xl"
                  type="button"
                >
                  Get in Touch
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
