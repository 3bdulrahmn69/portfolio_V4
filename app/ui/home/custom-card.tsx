import Image from 'next/image';
import { FaFingerprint } from 'react-icons/fa';
import BgImage from '../bg-image';

export default function CustomCard() {
  return (
    <div className="bg-primary-light dark:bg-primary-dark rounded-lg transition-colors duration-300">
      <figure className="relative">
        <Image
          src="/my.png"
          width={500}
          height={500}
          alt="Abdulrahman Moussa Picture"
          className="relative z-[2]"
          quality={100}
          priority
        />
        <BgImage />
        <div
          className="flex items-center justify-center absolute -top-[1px] -right-[1px] bg-secondary-background-light dark:bg-secondary-background-dark w-10 h-10 z-10"
          style={{
            clipPath: 'polygon(100% 0, 100% 100%, 30% 100%, 0 70%, 0 0)',
          }}
        >
          <a href="#about" title="Who am I?" aria-label="Who am I?">
            <FaFingerprint className="text-primary-light dark:text-primary-dark w-8 h-8" />
          </a>
        </div>
      </figure>
    </div>
  );
}
