import SocialLinks from './social-links';

import { CiMail, CiPhone, CiLocationOn } from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa';

const message: string = 'Hello, I would like to get in touch with you!';

const ContactDetails = () => {
  return (
    <div className="w-full max-w-md">
      <h3 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-primary-light dark:border-primary-dark inline-block">
        Contact Details
      </h3>

      <div className="flex flex-col space-y-2 p-6 bg-secondary-background-light dark:bg-secondary-background-dark rounded-xl">
        {/* Email */}
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-primary-light dark:bg-primary-dark rounded-lg">
            <CiMail className="w-6 h-6 text-text-dark " />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Email
            </p>
            <a
              href="mailto:abdelrahmanmoussa111@gmail.com"
              className="text-base md:text-lg break-all font-semibold hover:text-primary-light dark:hover:text-primary-dark transition-colors"
            >
              abdelrahmanmoussa111@gmail.com
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-primary-light dark:bg-primary-dark rounded-lg">
            <CiPhone className="w-6 h-6 text-text-dark " />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Phone
            </p>
            <a
              href="tel:+201018326780"
              className="text-lg font-semibold hover:text-primary-light dark:hover:text-primary-dark transition-colors"
            >
              +20 101 832 6780
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-primary-light dark:bg-primary-dark rounded-lg">
            <CiLocationOn className="w-6 h-6 text-text-dark " />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Location
            </p>
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Cairo, Egypt
            </span>
          </div>
        </div>

        {/* Availability */}
        <div className="flex items-center space-x-2 py-2">
          <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-green-600 dark:text-green-400">
            Available for new opportunities
          </span>
        </div>
      </div>

      <div className="mt-4 flex flex-col space-y-2 p-6 bg-secondary-background-light dark:bg-secondary-background-dark rounded-xl">
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-green-500 dark:text-green-400 rounded-lg">
            <FaWhatsapp className="w-6 h-6 text-text-dark " />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Whatsapp
            </p>
            <a
              href={`https://wa.me/+201018326780?text=${message}`}
              className="text-lg font-semibold hover:text-primary-light dark:hover:text-primary-dark transition-colors"
            >
              +20 101 832 6780
            </a>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col space-y-2 p-6 bg-secondary-background-light dark:bg-secondary-background-dark rounded-xl">
        <SocialLinks />
      </div>
    </div>
  );
};

export default ContactDetails;
