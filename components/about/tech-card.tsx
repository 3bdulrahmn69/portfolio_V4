interface TechCardProps {
  name: string;
  icon: React.ReactNode;
}

const TechCard = ({ name, icon }: TechCardProps) => {
  return (
    <div className="p-4 bg-secondary rounded-xl border border-border hover:border-primary transition-colors group">
      <div className="flex items-center gap-4">
        <span className="text-3xl text-primary">
          {icon}
        </span>
        <span className="font-medium text-foreground">
          {name}
        </span>
      </div>
      <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
        <div className="h-full bg-primary transition-all duration-500" />
      </div>
    </div>
  );
};

export default TechCard;
