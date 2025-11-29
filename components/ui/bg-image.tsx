import { cn } from '../../lib/utils';

interface BgImageProps {
  className?: string;
}

const BgImage = ({ className }: BgImageProps) => {
  return (
    <div
      className={cn(
        'absolute bg-BgImage w-4/5 h-4/5 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-1 rounded-lg',
        className
      )}
    ></div>
  );
};

export default BgImage;
