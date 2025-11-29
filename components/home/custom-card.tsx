import Image from 'next/image';
import { FaFingerprint } from 'react-icons/fa';
import BgImage from '../ui/bg-image';
import { projects, works } from '@/data/data';
import { FiBriefcase, FiCode, FiCalendar, FiTrendingUp } from 'react-icons/fi';
import FloatingStat from '../ui/floating-stat';

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
    <div className="bg-primary rounded-lg transition-colors duration-300 animate-FadeInRev relative">
      <figure className="relative">
        <Image
          src="/my.webp"
          width={500}
          height={500}
          alt="Abdulrahman Moussa Picture"
          className="relative z-2"
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
            border: 'border-info/30',
            text: 'text-info',
            bg: 'from-info/20 to-info/10',
            iconBg: 'from-info/15 to-info/5',
            iconText: 'text-info',
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
            border: 'border-success/30',
            text: 'text-success',
            bg: 'from-success/20 to-success/10',
            iconBg: 'from-success/15 to-success/5',
            iconText: 'text-success',
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
            border: 'border-accent/30',
            text: 'text-accent',
            bg: 'from-accent/20 to-accent/10',
            iconBg: 'from-accent/15 to-accent/5',
            iconText: 'text-accent',
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
            border: 'border-warning/30',
            text: 'text-warning',
            bg: 'from-warning/20 to-warning/10',
            iconBg: 'from-warning/15 to-warning/5',
            iconText: 'text-warning',
          }}
          delay="delay-700"
          animation="animate-float-reverse-delayed"
        />

        {/* Fingerprint Button */}
        <div
          className="flex items-center justify-center absolute -top-1 -right-1 bg-secondary w-10 h-10 z-10"
          style={{
            clipPath: 'polygon(100% 0, 100% 100%, 30% 100%, 0 70%, 0 0)',
          }}
        >
          <a href="#about" title="Who am I?" aria-label="Who am I?">
            <FaFingerprint className="text-primary w-8 h-8" />
          </a>
        </div>
      </figure>
    </div>
  );
}
