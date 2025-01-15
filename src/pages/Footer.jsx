import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

  const getCurrentDate = new Date()

  const currentYear = getCurrentDate.getFullYear()

  return (
    <div className="container mx-auto">
      <div className="mx-16 border-t mt-10 border-primary-light">
        <div className="flex items-center">
          <div>
            <p className="text-primary-light  text-[10px] md:text-sm py-4">{
              `© ${currentYear} VZAD, Inc.`

            }</p>
          </div>

          <div className="text-primary-light text-[10px] md:text-sm ml-4 flex ">
            <Link to="#">
              <p className="ml-6 hover:underline">Privacy </p>
            </Link>
            <Link to="#">
              <p className="ml-6 hover:underline"> Terms</p>
            </Link>
            <Link to="#">
              <p className="ml-6 hover:underline">FAQs</p>
            </Link>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Footer;
