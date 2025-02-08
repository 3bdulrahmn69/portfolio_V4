interface TechCardProps {
  name: string;
  icon: React.ReactNode;
}

const ToolCard = ({ name, icon }: TechCardProps) => {
  return (
    <div
      key={name}
      className="p-4 bg-gradient-to-br from-secondary-background-light/50 to-secondary-background-light dark:from-secondary-background-dark/50 dark:to-secondary-background-dark backdrop-blur-sm rounded-xl border border-secondary-background-light dark:border-secondary-background-dark hover:border-primary-light dark:hover:border-primary-dark transition-colors"
    >
      <div className="flex items-center gap-4">
        <span className="text-2xl text-primary-light dark:text-primary-dark">
          {icon}
        </span>
        <div>
          <h4 className="font-medium text-gray-700 dark:text-gray-300">
            {name}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
