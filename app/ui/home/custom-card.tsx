import Image from 'next/image';
import { FaFingerprint } from 'react-icons/fa';
import BgImage from '../bg-image';
import { projects, works } from '@/app/data/data';
import { FiBriefcase, FiCode, FiCalendar, FiTrendingUp } from 'react-icons/fi';
import FloatingStat from '../floating-stat';

export default function CustomCard() {
  // Calculate statistics
  const totalProjects = projects.length;
  const totalWorks = works.length;
  const totalItems = totalProjects + totalWorks;

  // Get unique technologies
  const allTechStacks = [...projects, ...works].flatMap(
    (item) => item.techStack
  );
  const uniqueTechnologies = new Set(allTechStacks);
  const totalUniqueTechnologies = uniqueTechnologies.size;

  // Get years active
  const years = [...projects, ...works].map((item) => item.year);
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);

  // Get completion statistics
  const completedProjects = [...projects, ...works].filter(
    (item) => item.status === 'completed'
  ).length;
  const completionRate = Math.round((completedProjects / totalItems) * 100);

  return (
    <div className="bg-primary-light dark:bg-primary-dark rounded-lg transition-colors duration-300 animate-FadeInRev relative">
      <figure className="relative">
        <Image
          src="/my.webp"
          width={500}
          height={500}
          alt="Abdulrahman Moussa Picture"
          className="relative z-[2]"
          quality={100}
          priority
        />
        <BgImage />

        {/* Floating Statistics - Elegant Circular Badges */}
        {/* Top Left - Total Projects */}
        <FloatingStat
          icon={FiBriefcase}
          value={totalItems}
          label="Projects"
          position="top-[3%] left-[3%] sm:top-[4%] sm:left-[4%] md:top-[6%] md:left-[6%]"
          colorClasses={{
            border: 'border-blue-500/30 dark:border-blue-400/30',
            text: 'text-blue-500 dark:text-blue-400',
            bg: 'from-blue-500/20 to-blue-400/10 dark:from-blue-400/20 dark:to-blue-300/10',
            iconBg:
              'from-blue-500/15 to-blue-400/5 dark:from-blue-400/15 dark:to-blue-300/5',
            iconText: 'text-blue-500 dark:text-blue-400',
          }}
          delay="delay-100"
          animation="animate-float"
        />

        {/* Top Right - Technologies */}
        <FloatingStat
          icon={FiCode}
          value={totalUniqueTechnologies}
          label="Tech"
          position="top-[3%] right-[3%] sm:top-[4%] sm:right-[4%] md:top-[6%] md:right-[6%]"
          colorClasses={{
            border: 'border-green-500/30 dark:border-green-400/30',
            text: 'text-green-500 dark:text-green-400',
            bg: 'from-green-500/20 to-green-400/10 dark:from-green-400/20 dark:to-green-300/10',
            iconBg:
              'from-green-500/15 to-green-400/5 dark:from-green-400/15 dark:to-green-300/5',
            iconText: 'text-green-500 dark:text-green-400',
          }}
          delay="delay-300"
          animation="animate-float-reverse"
        />

        {/* Bottom Left - Years Active */}
        <FloatingStat
          icon={FiCalendar}
          value={maxYear - minYear + 1}
          label="Years"
          position="bottom-[3%] left-[3%] sm:bottom-[4%] sm:left-[4%] md:bottom-[6%] md:left-[6%]"
          colorClasses={{
            border: 'border-purple-500/30 dark:border-purple-400/30',
            text: 'text-purple-500 dark:text-purple-400',
            bg: 'from-purple-500/20 to-purple-400/10 dark:from-purple-400/20 dark:to-purple-300/10',
            iconBg:
              'from-purple-500/15 to-purple-400/5 dark:from-purple-400/15 dark:to-purple-300/5',
            iconText: 'text-purple-500 dark:text-purple-400',
          }}
          delay="delay-500"
          animation="animate-float-delayed"
        />

        {/* Bottom Right - Completion Rate */}
        <FloatingStat
          icon={FiTrendingUp}
          value={`${completionRate}%`}
          label="Done"
          position="bottom-[3%] right-[3%] sm:bottom-[4%] sm:right-[4%] md:bottom-[6%] md:right-[6%]"
          colorClasses={{
            border: 'border-orange-500/30 dark:border-orange-400/30',
            text: 'text-orange-500 dark:text-orange-400',
            bg: 'from-orange-500/20 to-orange-400/10 dark:from-orange-400/20 dark:to-orange-300/10',
            iconBg:
              'from-orange-500/15 to-orange-400/5 dark:from-orange-400/15 dark:to-orange-300/5',
            iconText: 'text-orange-500 dark:text-orange-400',
          }}
          delay="delay-700"
          animation="animate-float-reverse-delayed"
        />

        {/* Fingerprint Button */}
        <div
          className="flex items-center justify-center absolute -top-[1px] -right-[1px] bg-secondary-background-light dark:bg-secondary-background-dark w-10 h-10 z-10"
          style={{
            clipPath: 'polygon(100% 0, 100% 100%, 30% 100%, 0 70%, 0 0)',
          }}
        >
          <a href="#about" title="Who am I?" aria-label="Who am I?">
            <FaFingerprint className="text-primary-light dark:text-primary-dark w-8 h-8" />
          </a>
        </div>
      </figure>
    </div>
  );
}
