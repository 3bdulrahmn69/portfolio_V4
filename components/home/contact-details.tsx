import SocialLinks from './social-links';

import { CiMail, CiPhone, CiLocationOn } from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa';

const message: string = 'Hello, I would like to get in touch with you!';

const ContactDetails = () => {
  return (
    <div className="w-full max-w-md animate-FadeIn">
      <h3 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-primary inline-block">
        Contact Details
      </h3>

      <div className="flex flex-col space-y-2 p-6 bg-secondary rounded-xl">
        {/* Email */}
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-primary rounded-lg">
            <CiMail className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Email</p>
            <a
              href="mailto:abdulrahman.moussa.dev@gmail.com"
              className="text-base md:text-lg break-all font-semibold hover:text-primary transition-colors"
            >
              abdulrahman.moussa.dev@gmail.com
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-primary rounded-lg">
            <CiPhone className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Phone</p>
            <a
              href="tel:+201018326780"
              className="text-lg font-semibold hover:text-primary transition-colors"
            >
              +20 101 832 6780
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-primary rounded-lg">
            <CiLocationOn className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Location
            </p>
            <span className="text-lg font-semibold text-foreground">
              Cairo, Egypt
            </span>
          </div>
        </div>

        {/* Availability */}
        <div className="flex items-center space-x-2 py-2">
          <div className="h-3 w-3 bg-success rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-success">
            Available for new opportunities
          </span>
        </div>
      </div>

      <div className="mt-4 flex flex-col space-y-2 p-6 bg-secondary rounded-xl">
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-success text-success-foreground rounded-lg">
            <FaWhatsapp className="w-6 h-6 text-success-foreground" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Whatsapp
            </p>
            <a
              href={`https://wa.me/+201018326780?text=${message}`}
              className="text-lg font-semibold hover:text-primary transition-colors"
            >
              +20 101 832 6780
            </a>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col space-y-2 p-6 bg-secondary rounded-xl">
        <SocialLinks />
      </div>
    </div>
  );
};

export default ContactDetails;
