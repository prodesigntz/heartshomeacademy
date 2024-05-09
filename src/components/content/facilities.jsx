import React from 'react'
import { HomeParagraph, Title } from '../texties'
import { Button } from '../ui/button'

export default function Facilities() {
  return (
    <section className='psektion respons space-y-10'>
         {/* top column */}
         <div className="sektion md:grid-cols-3">
          <div>gif</div>
          <div>
          <Title
              place=""
              subHeading="School Facilities"
              first="Engaging & Spacious School Campus"
            />
            <HomeParagraph place="center" content=" 
            Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
            
          </div>
          <div>image</div>
        </div>

        {/* bottom collumn */}
        <div className="sektion md:grid-cols-4">
            <div className='shadow-md flex flex-col p-5 space-y-5 text-center hover:text-white hover:bg-heartssecondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-md duration-300 '>
              <div>images here</div>
              <div>
                <h3 className='font-semibold fredoka text-xl '>Class Rooms</h3>
              </div>
              <div>
                <p className=''>Lorem spatum sed pulvar gravida hendrerit lectusa. Sed nisi lacus sed viverra.</p>
              </div> 
     
            </div>

            <div className='shadow-md flex flex-col p-5 space-y-5 text-center hover:text-white hover:bg-heartssecondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-md duration-300 '>
              <div>images here</div>
              <div>
                <h3 className='font-semibold fredoka text-xl '>Transport</h3>
              </div>
              <div>
                <p className=''>Lorem spatum sed pulvar gravida hendrerit lectusa. Sed nisi lacus sed viverra.</p>
              </div> 
            </div>

            <div className='shadow-md flex flex-col p-5 space-y-5 text-center hover:text-white hover:bg-heartssecondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-md duration-300 '>
             <div>images here</div>
              <div>
                <h3 className='font-semibold fredoka text-xl '>Play Area</h3>
              </div>
              <div>
                <p className=''>Lorem spatum sed pulvar gravida hendrerit lectusa. Sed nisi lacus sed viverra.</p>
              </div> 
            </div>

            <div className='shadow-md flex flex-col p-5 space-y-5 text-center hover:text-white hover:bg-heartssecondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-md duration-300 '>
             <div>images here</div>
              <div>
                <h3 className='font-semibold fredoka text-xl '>Healthy Foods</h3>
              </div>
              <div>
                <p className=''>Lorem spatum sed pulvar gravida hendrerit lectusa. Sed nisi lacus sed viverra.</p>
              </div> 
            </div>
          </div>
    </section>
  )
}
