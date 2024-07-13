import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import ContactUs from "../Homepage/ContactUs";

export const StoreInformation = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="py-16">
          <div className="text-center">
            <h4 className="md:text-2xl text-xl tracking-widest text-center pb-4 uppercase text-red-600">
              Store Information
            </h4>
            <h2 className="md:text-5xl text-3xl text-center mb-6">
              We’d love to have visitors!
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div className="p-4 md:p-6 shadow-2xl flex flex-col md:flex-row justify-evenly items-center h-full">
              <div className="w-full md:w-1/2">
                <span className="inline-block p-3 text-red-600">
                  <FontAwesomeIcon icon={faEnvelope} className="w-10 h-10" />
                </span>
                <h2 className=" text-lg font-medium text-gray-800 uppercase">
                  Chat to sales
                </h2>
                <p className=" text-base text-gray-500">
                  Speak to our friendly team.
                </p>
                <p className=" text-base italic text-red-600">
                  strideX@email.com
                </p>
              </div>
              <div className="w-full md:w-1/2 mt-6 md:mt-0">
                <img
                  className="object-cover w-full h-40 md:h-full "
                  src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=100"
                  alt="Contact Us"
                />
              </div>
            </div>

            <div className="p-4 md:p-6 shadow-2xl flex flex-col md:flex-row justify-evenly items-center h-full">
              <div className="w-full md:w-1/2">
                <span className="inline-block p-3 text-red-700">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="w-10 h-10"
                  />
                </span>
                <h2 className=" text-lg font-medium text-gray-800 uppercase">
                  Visit us
                </h2>
                <p className=" text-base text-gray-500">Visit our Store.</p>
                <p className=" text-base text-red-700">
                  785 15th Street, Office 478 Berlin
                </p>
              </div>

              <div className="w-full md:w-1/2 mt-6 md:mt-0">
                <iframe
                  className="w-full h-40 md:h-full  "
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.6904575672074!2d13.384799616128687!3d52.5200069798139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851ebf51fa7ff%3A0x28f47f6cf3c3e3d4!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1623138577927!5m2!1sen!2sus"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <ContactUs />
      </section>
    </div>
  );
};
