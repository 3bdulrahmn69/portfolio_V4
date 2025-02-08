interface TechCardProps {
  name: string;
  icon: React.ReactNode;
}

const TechCard = ({ name, icon }: TechCardProps) => {
  return (
    <div className="p-4 bg-secondary-background-light dark:bg-secondary-background-dark rounded-xl border border-secondary-background-light dark:border-secondary-background-dark hover:border-primary-light dark:hover:border-primary-dark transition-colors group">
      <div className="flex items-center gap-4">
        <span className="text-3xl text-primary-light dark:text-primary-dark">
          {icon}
        </span>
        <span className="font-medium text-gray-700 dark:text-gray-300">
          {name}
        </span>
      </div>
      <div className="mt-3 h-1 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full bg-primary-light dark:bg-primary-dark transition-all duration-500" />
      </div>
    </div>
  );
};

export default TechCard;
