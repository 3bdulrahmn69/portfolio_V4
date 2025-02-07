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
    <div className="absolute left-0 top-4 w-8 h-8 rounded-full bg-primary-light dark:bg-primary-dark flex items-center justify-center">
      <div className="w-3 h-3 bg-secondary-background-light dark:bg-secondary-background-dark rounded-full"></div>
    </div>

    {/* Content */}
    <div className="space-y-2">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="text-gray-600 dark:text-gray-400">{provider}</p>
        </div>
        {status && (
          <span
            className={`${
              status === 'Completed'
                ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
            } text-sm  px-3 py-1 rounded-full`}
          >
            {status}
          </span>
        )}
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 italic">
        {period}
      </p>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </div>
);

export default JourneyItem;
