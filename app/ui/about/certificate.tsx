import Image from 'next/image';
import Button from '../button';
import { Certification } from '@/app/lib/definitions';

const Certificate = ({
  title,
  issuer,
  image,
  credentialUrl,
  issueDate,
}: Certification) => {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={image}
        alt={title}
        width={180}
        height={180}
        className="rounded-lg"
      />
      <div>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-gray-300">{issuer}</p>
        <p className="text-gray-400">{issueDate}</p>
        <Button
          type="anchor"
          variant="tertiary"
          href={credentialUrl}
          ariaLabel={`View ${title} certificate`}
          className="text-primary-light dark:text-primary-dark"
        >
          View Certificate
        </Button>
      </div>
    </div>
  );
};

export default Certificate;
