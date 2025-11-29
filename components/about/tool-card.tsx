interface TechCardProps {
  name: string;
  icon: React.ReactNode;
}

const ToolCard = ({ name, icon }: TechCardProps) => {
  return (
    <div
      key={name}
      className="p-4 bg-secondary rounded-xl border border-border hover:border-primary transition-colors"
    >
      <div className="flex items-center gap-4">
        <span className="text-2xl text-primary">{icon}</span>
        <div>
          <h4 className="font-medium text-foreground">{name}</h4>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
