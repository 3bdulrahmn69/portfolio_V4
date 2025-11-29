interface TechCircleProps {
  name: string;
  icon: React.ReactNode;
  padding?: string;
  size?: string;
}

const TechCircle = ({ name, icon, padding, size }: TechCircleProps) => {
  return (
    <div className="group relative flex items-center justify-center">
      <div
        className={`${
          padding ? padding : 'p-2'
        } rounded-full border-2 border-primary hover:bg-primary hover:scale-110 transition-all duration-300`}
      >
        <span className={size ? size : 'text-2xl'}>{icon}</span>
      </div>

      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-card text-foreground text-sm px-2 py-1 rounded-md whitespace-nowrap">
          <span>{name}</span>
          <div className="absolute w-2 h-2 bg-card rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default TechCircle;
