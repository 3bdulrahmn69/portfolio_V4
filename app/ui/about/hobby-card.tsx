interface HobbyCardProps {
  emoji: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  emojiColor?: string;
}

const HobbyCard = ({
  emoji,
  title,
  children,
  className,
  emojiColor,
}: HobbyCardProps) => (
  <div
    className={`relative p-6 rounded-xl border-2 border-secondary-background-light dark:border-secondary-background-dark ${
      className || 'hover:border-primary-light dark:hover:border-primary-dark'
    } transition-all duration-300 hover:shadow-lg`}
  >
    <div
      className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4 transition-transform duration-300 group-hover:scale-110 ${
        emojiColor || 'bg-primary-light dark:bg-primary-dark'
      }`}
    >
      {emoji}
    </div>
    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
      {children}
    </p>
  </div>
);

export default HobbyCard;
