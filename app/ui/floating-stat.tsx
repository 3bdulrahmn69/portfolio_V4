import Link from 'next/link';

const FloatingStat = ({
  icon: Icon,
  value,
  label,
  position,
  colorClasses,
  delay,
  animation = 'animate-float',
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: string | number;
  label: string;
  position: string;
  colorClasses: {
    border: string;
    text: string;
    bg: string;
    iconBg: string;
    iconText: string;
  };
  delay: string;
  animation?: string;
}) => (
  <Link
    href="/projects#statistics"
    className={`absolute ${position} z-20 animate-fadeInUp ${delay} ${animation}`}
  >
    <div className="group relative cursor-pointer">
      <div
        className={`absolute inset-0 bg-gradient-to-r ${colorClasses.bg} rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      ></div>
      <div
        className={`relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2 sm:p-1.5 md:p-2 lg:p-2.5 xl:p-3.5 shadow-lg ${colorClasses.border} hover:scale-110 hover:shadow-xl transition-all duration-500 ease-out transform-gpu`}
      >
        <div className="flex flex-col items-center min-w-[36px] sm:min-w-[32px] md:min-w-[35px] lg:min-w-[40px] xl:min-w-[50px]">
          <div
            className={`bg-gradient-to-br ${colorClasses.iconBg} rounded-full p-1 sm:p-0.5 md:p-0.5 lg:p-1 xl:p-2 mb-1 sm:mb-0.5 md:mb-0.5 lg:mb-1 xl:mb-2 transition-all duration-300 group-hover:scale-110`}
          >
            <Icon
              className={`w-3 h-3 sm:w-2.5 md:w-2.5 lg:w-3 xl:w-4 xl:h-4 ${colorClasses.iconText}`}
            />
          </div>
          <span
            className={`text-[11px] sm:text-[9px] md:text-[9px] lg:text-[10px] xl:text-[13px] font-bold ${colorClasses.text}`}
          >
            {value}
          </span>
          <span className="text-[7px] sm:text-[6px] md:text-[6px] lg:text-[7px] xl:text-[9px] text-gray-500 dark:text-gray-400 font-medium">
            {label}
          </span>
        </div>
      </div>
    </div>
  </Link>
);

export default FloatingStat;
