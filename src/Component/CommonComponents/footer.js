import React from "react";
// import { Link } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CycloneSharpIcon from "@mui/icons-material/CycloneSharp";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

export default function Footer() {
  return (
    <footer>
      <hr></hr>
      <div
        className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white pt-1 xl:hidden lg:hidden xl:hidden 2xl:hidden"
        align="center"
      >
        <CycloneSharpIcon className="mb-1 mr-1 animate-spin animate-infinite" />
        Projex2.0
        <div className="contact-info flex flex-col justify-center mr-3 gap-3 text-black bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500	text-white pt-1">
          <div className="info-item">
            <p>
              <HomeIcon className="mr-1 mb-1" />
              Location: India
            </p>
          </div>
          <div className="info-item">
            <p>
              <PhoneIcon className="mr-1 mb-1" />
              Contact Number: +91 84461 37285
            </p>
          </div>
          <div className="info-item">
            <p>
              <MailIcon className="mr-1 mb-1" />
              Email: <a href="www.gmail.com">shadabsayyed1214@gmail.com</a>
            </p>
          </div>
          <div className="info-item">
            <p>Address: Swargate, Pune, Maharashtra 411042</p>
          </div>
        </div>
        <div className="footer-social pt-4 ml-3 animate-pulse animate-infinite animate-delay-[2ms] animate-ease-linear">
          {/* Social media follow buttons */}
          <a
            href="https://www.facebook.com/shadabkiller786?mibextid=ZbWKwL"
            style={{ marginRight: "10px" }}
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/shadab_mehdi3527/"
            style={{ marginRight: "10px" }}
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/shadab-sayyed-102407203/"
            style={{ marginRight: "10px" }}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a  
            href="https://www.github.com/your-github-url"
            style={{ marginRight: "10px" }}
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <div className="footer-bottom mt-1">
          <p> © All rights reserved.</p>
        </div>
      </div>
      <footer>
      <hr></hr>
      <div
        className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500	text-white pt-1 hidden sm:block "
        align="center"
      >
        <CycloneSharpIcon className="mb-1 mr-1 animate-spin animate-infinite" />
        Projex2.0
        <div className="contact-info flex justify-center mr-3 gap-3 text-black bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500	text-white pt-1">
          <div className="info-item">
            <p>
              <HomeIcon className="mr-1 mb-1" />
              Location: India
            </p>
          </div>
          <div className="info-item">
            <p>
              <PhoneIcon className="mr-1 mb-1" />
              Contact Number: +91 84461 37285
            </p>
          </div>
          <div className="info-item">
            <p>
              <MailIcon className="mr-1 mb-1" />
              Email: <a href="www.gmail.com">shadabsayyed1214@gmail.com</a>
            </p>
          </div>
          <div className="info-item">
            <p>Address: Swargate, Pune, Maharashtra 411042</p>
          </div>
        </div>
        <div className="footer-social pt-4 ml-3 animate-pulse animate-infinite animate-delay-[2ms] animate-ease-linear ">
          {/* Social media follow buttons */}
          <a
            href="https://www.facebook.com/shadabkiller786?mibextid=ZbWKwL"
            style={{ marginRight: "10px" }}
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/shadab_mehdi3527/"
            style={{ marginRight: "10px" }}
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/shadab-sayyed-102407203/"
            style={{ marginRight: "10px" }}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://www.github.com/your-github-url"
            style={{ marginRight: "10px" }}
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <div className="footer-bottom mt-1">
          <p> © All rights reserved.</p>
        </div>
      </div>
    </footer>
    </footer>
  );
}
