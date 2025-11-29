interface JourneyItemProps {
  title: string;
  provider: string;
  period: string;
  description: string;
  status?: string;
  isLast?: boolean;
}

const JourneyItem = ({
  title,
  provider,
  period,
  description,
  status,
}: JourneyItemProps) => (
  <div className="relative pl-12">
    <div className="absolute left-0 top-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
      <div className="w-3 h-3 bg-secondary rounded-full"></div>
    </div>

    {/* Content */}
    <div className="space-y-2">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="text-muted-foreground">{provider}</p>
        </div>
        {status && (
          <span
            className={`${
              status === 'Completed'
                ? 'bg-success/20 text-success'
                : 'bg-warning/20 text-warning-foreground'
            } text-sm  px-3 py-1 rounded-full`}
          >
            {status}
          </span>
        )}
      </div>
      <p className="text-sm text-muted-foreground italic">
        {period}
      </p>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default JourneyItem;
