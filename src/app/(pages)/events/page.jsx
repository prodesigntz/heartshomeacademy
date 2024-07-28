"use client"

import { EventsCards } from '@/components/cards';
import SkeletonOne from '@/components/skeletonOne';
import useFetchAll from '@/hooks/useFetchAll';
import { truncateDescription } from '@/lib/utils';
import React, { useState , useEffect} from "react";

export default function Page() {

  const { isLoading, data } = useFetchAll("Events");

 
  return (
    <main className="psektion">
      <div className="respons sektion md:grid-cols-4">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <SkeletonOne key={index} />
            ))
          : data.map((tukio) => (
                <EventsCards
                  key={tukio.id}
                  src={tukio.img}
                  title={tukio.title}
                  desc={truncateDescription(tukio.desc, 10)}
                  href={`/events/${tukio.slug}`}
                  date={tukio.eventDate}
                  days={`${tukio.days} Days`}
                />
              ))}
      </div>
    </main>
  );
}
