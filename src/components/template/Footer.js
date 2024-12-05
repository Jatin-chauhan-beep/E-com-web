import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo Section */}
          <div>
            <h2 className="text-lg font-bold">SHOPSTIC</h2>
            <p className="text-sm text-gray-600 mt-2">
              Awesome grocery store website template
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>
                <span className="font-bold">Address:</span> 5171 W Campbell Ave
                undefined Kent, Utah 53127 United States
              </li>
              <li>
                <span className="font-bold">Call Us:</span> (+91) -
                540-025-124553
              </li>
              <li>
                <span className="font-bold">Email:</span> sale@Nest.com
              </li>
              <li>
                <span className="font-bold">Hours:</span> 10:00 - 18:00, Mon -
                Sat
              </li>
            </ul>
          </div>

          {/* Repeated Columns */}
          {["Company", "Company", "Corporate", "Popular"].map(
            (heading, idx) => (
              <div key={idx}>
                <h3 className="font-bold text-lg mb-4">{heading}</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    "About Us",
                    "Delivery Information",
                    "Privacy Policy",
                    "Terms & Conditions",
                    "Contact Us",
                    "Support Center",
                    "Careers",
                  ].map((link, index) => (
                    <li
                      key={index}
                      className="hover:text-gray-800 cursor-pointer"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © 2024, Ecommerce Template. All rights reserved
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a
              href="#"
              className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-full"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-full"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-full"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-full"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
