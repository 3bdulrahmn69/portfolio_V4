import React from 'react';
import JourneyItem from './journey-item';

interface TimeLineProps {
  list: {
    title: string;
    provider: string;
    period: string;
    description: string;
    status?: string;
  }[];
  title: string;
}

const TimeLine = ({ list, title }: TimeLineProps) => {
  return (
    <>
      <h3 className="text-xl font-semibold pb-2 border-b-2 border-primary-light dark:border-primary-dark inline-block w-fit">
        {title}
      </h3>
      <div className="relative">
        <div
          className="absolute left-4 top-0 w-1 h-full bg-secondary-background-light dark:bg-secondary-background-dark"
          aria-hidden="true"
        ></div>

        <div className="space-y-8">
          {list.map((item, index) => (
            <JourneyItem
              key={`course-${index}`}
              title={item.title}
              provider={item.provider}
              period={item.period}
              description={item.description}
              status={item.status}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TimeLine;
