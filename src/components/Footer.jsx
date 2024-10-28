import { useNavigate } from "react-router-dom";
import facebook from "/assets/facebook.png";
import instagram from "/assets/instagram.png";
import linkedin from "/assets/linkedin.png";
import logo from "/assets/logo.png";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <>
      <footer className="bg-gradient-to-b from-blue-100 to-blue-50 text-white pb-10 pt-10 pl-5 pr-5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">

          <section className="mb-4 md:mb-0">
            <img
              onClick={() => navigate("/")}
              src={logo}
              alt="EventSpot Lite"
              className="cursor-pointer mb-2 h-12 w-auto"
            />
            <p className="text-lg text-black">Discover Events That Inspire – Explore, Engage, Enjoy!</p>
          </section>

          <section className="mb-4 md:mb-0 text-black">
            <nav>
              <ul className="list-none space-y-2">
                <li className="cursor-pointer hover:text-blue-800">
                  Terms & Conditions
                </li>
                <li className="cursor-pointer hover:text-blue-800">
                  Privacy Policy
                </li>
                <li className="cursor-pointer hover:text-blue-800">
                  Refund Policy
                </li>
              </ul>
            </nav>
          </section>

          <section className="mb-4 md:mb-0 text-black">
            <h4 className="font-semibold">Contact Us</h4>
            <ul className="list-none mt-2">
              <li>eventspotlite@gmail.com</li>
              <li>7696881805</li>
            </ul>
          </section>

          <section className="text-black">
            <h4 className="font-semibold">Social Links</h4>
            <div className="flex space-x-2 mt-2">
                <img src={instagram} alt="Instagram" className="cursor-pointer h-11 w-auto hover:opacity-80" />
                <img src={facebook} alt="Facebook" className="cursor-pointer h-11 w-auto hover:opacity-80" />
                <img src={linkedin} alt="LinkedIn" className="cursor-pointer h-11 w-auto hover:opacity-80" />
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}