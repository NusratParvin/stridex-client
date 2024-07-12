import whoareweImage from "../../../assets/images/whoarewe.jpg";
import mission from "../../../assets/images/mission.jpg";
import vision from "../../../assets/images/vision.jpg";

export const WhoAreWe = () => {
  return (
    <div>
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={whoareweImage}
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <h4 className="text-2xl tracking-widest text-left pb-4 uppercase">
              Who Are We
            </h4>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Empower Your Journey,
              <span className="inline-block text-red-700 uppercase">
                One Step at a Time !
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-xl">
              We are a team of passionate individuals dedicated to enhancing the
              world of sports. With years of experience in the industry, our
              mission is to provide top-quality sporting goods and exceptional
              customer service. Our commitment to innovation and excellence
              drives us to deliver the best products to athletes and sports
              enthusiasts worldwide.
            </p>
          </div>
        </div>
      </div>

      <div className=" my-24 px-4">
        <div className="flex flex-col justify-center items-center gap-12">
          <div className="flex md:flex-row flex-col  justify-evenly items-center text-center md:h-80 h-auto gap-4">
            <img className="object-cover w-full h-full " src={mission} />
            <div>
              <h3 className="text-4xl font-semibold mb-2 text-red-700">
                OUR MISSION
              </h3>
              <div className="h-1 w-12 bg-red-700 mx-auto my-4"></div>
              <p className="text-base text-gray-700 md:text-xl px-4">
                Our mission is to empower athletes of all levels to reach their
                full potential by providing high-quality sports gear and
                exceptional customer service.
              </p>
            </div>
          </div>
          <div className="hidden md:block border-l-2  border-gray-300"></div>

          <div className="flex  md:flex-row flex-col justify-evenly items-center text-center md:h-80 h-auto gap-4">
            <div>
              <h3 className="text-4xl font-semibold mb-2 text-red-700">
                OUR VISION
              </h3>
              <div className="h-1 w-12 bg-red-700 mx-auto my-4"></div>
              <p className="text-base text-gray-700 md:text-xl px-4">
                Our vision is to be the leading provider of innovative sports
                gear, inspiring a healthier and more active world.
              </p>
            </div>
            <img className="object-cover w-full h-full " src={vision} />
          </div>
        </div>
      </div>
    </div>
  );
};
