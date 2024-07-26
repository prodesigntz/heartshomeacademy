"use client"

import { ActivitiesCards } from '@/components/cards';
import SkeletonOne from '@/components/skeletonOne';
import useFetchAll from '@/hooks/useFetchAll';
import { truncateDescription } from '@/lib/utils';
import React from 'react'

export default function Activities() {
  const { isLoading, data } = useFetchAll("Activities");

  return (
    <main className="psektion">
      <div className="respons sektion md:grid-cols-4">
        {isLoading
          ? // Render 3 skeletons
            Array.from({ length: 3 }).map((_, index) => (
              <SkeletonOne key={index} />
            ))
          : data.map((activity) => (
              <ActivitiesCards
                key={activity.id}
                href={`/activities/${activity.slug}`}
                src={activity.img}
                title={activity.title}
                desc={truncateDescription(activity.desc, 10)}
                data-aos="zoom-in" // Adding AOS animation to each card
              />
            ))}
      </div>
    </main>
  );
}
