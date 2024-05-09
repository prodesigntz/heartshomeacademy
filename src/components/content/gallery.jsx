import React from 'react'
import { HomeParagraph, Title } from '../texties'

export default function Gallery() {
  return (
    <section className='psektion bg-slate-200 space-y-5'>
      <div className='respons'>
         {/* top column */}
         <div className="sektion md:grid-cols-3">
          <div>gif</div>
          <div>
          <Title
              place=""
              subHeading="School Facilities"
              first="Bicultural Students"
            />
            <HomeParagraph place="center" content=" 
            Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
            
          </div>
          <div>image</div>
        </div>

         {/* grids auto cols */}
         <div className="flex flex-wrap gap-3">
            <div className='rounded-md shadow p-2'>01</div>
            <div  className='rounded-md shadow p-2'>02</div>
            <div  className='rounded-md shadow p-2'>03</div>
            <div  className='rounded-md shadow p-2'>04</div>
            <div  className='rounded-md shadow p-2'>05</div>
         </div>
      </div>
    </section>
  )
}
