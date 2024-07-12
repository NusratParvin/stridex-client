// import { WhoAreWe } from "./WhoAreWe";

import { Outlet } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="w-11/12 mx-auto px-4 py-16">
      <Outlet />
    </div>
  );
};

export default AboutUs;
