import Image from 'next/image';
import Button from '../ui/button';
import { Certification } from '@/lib/definitions';

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
        className="rounded-lg w-auto h-auto"
      />
      <div>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-muted-foreground">{issuer}</p>
        <p className="text-muted-foreground">{issueDate}</p>
        <Button
          type="anchor"
          variant="tertiary"
          href={credentialUrl}
          ariaLabel={`View ${title} certificate`}
          className="text-primary"
        >
          View Certificate
        </Button>
      </div>
    </div>
  );
};

export default Certificate;
