"use client"

import SkeletonOne from '@/components/skeletonOne';
import useFetchAll from '@/hooks/useFetchAll';
import { truncateDescription } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Programs() {
  const { isLoading, data } = useFetchAll("Programs");

  return (
    <main className="psektion">
      <div className="respons sektion md:grid-cols-3">
        {isLoading
          ? Array.from({ length: 3 }).map((_, index) => (
              <SkeletonOne key={index} />
            ))
          : data.map((prog) => (
              <div
                key={prog.id}
                className="flex items-center justify-between rounded-3xl p-10 bg-white shadow-md space-x-5"
              >
                <div>
                  <Image
                    src={prog.img}
                    alt={prog.title}
                    width={280}
                    height={260}
                    style={{
                      maxWidth: "100%",
                      height: "160px",
                      objectFit: "cover",
                    }}
                    className=" max-w-full max-h-50 rounded-md"
                  />
                </div>
                <div className="flex flex-col space-y-3">
                  <h2 className="text-2xl fredoka hover:text-heartsprimary">
                    <Link href={`/programs/${prog.slug}`}>{prog.title}</Link>
                  </h2>
                  <h3 className="">{prog.age}</h3>
                  <p className="">{truncateDescription(prog.desc, 10)}</p>
                </div>
              </div>
            ))}
      </div>
    </main>
  );
}
