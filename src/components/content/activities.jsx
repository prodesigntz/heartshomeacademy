
import React from 'react'
import { HomeParagraph, Title } from '../texties'
import { Button } from '../ui/button'
import Image from 'next/image'

export default function Activities() {
  return (
    <section className="psektion ">
      <div className="respons sektion md:grid-cols-3">
        <div className='md:px-5'>
        <Title
              place="start"
              subHeading="Activity Programs"
              first="Smart Activities"
            />
            <HomeParagraph 
                place="center" 
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
             <div className=" flex items-center ">
                <Button className="rounded-full text-center text-lg p-6 bg-heartssecondary">View More</Button>
            </div>  
            </div>
        <div className='col-span-2 '>
          <div className='md:pt-10'></div>
          <div className="sektion md:grid-cols-3">

            {/* Card one */}
            <div className='shadow-md flex flex-col p-5 space-y-5 text-center'>
              <div>      
                 <Image
                    src="/images/heros/bghero.jpg"
                    alt="blog"
                    width={1000}
                    height={240}
                    style={{
                      maxWidth: "100%",
                      height: "220px",
                      objectFit: "cover",
                    }}
                    className=" max-w-full max-h-50 rounded-md"
                  /></div>
              <div>
                <h3 className='font-semibold fredoka text-xl '>Physical Activities</h3>
              </div>
              <div>
                <p className=''>Lorem spatum sed pulvar gravida hendrerit lectusa. Sed nisi lacus sed viverra.</p>
              </div> 
            </div>

           {/* Card one */}
            <div className='shadow-md flex flex-col p-5 space-y-5 text-center'>
              <div>    
                 <Image
                    src="/images/heros/bghero.jpg"
                    alt="blog"
                    width={1000}
                    height={240}
                    style={{
                      maxWidth: "100%",
                      height: "220px",
                      objectFit: "cover",
                    }}
                    className=" max-w-full max-h-50 rounded-md"
                  /></div>
              <div>
                <h3 className='font-semibold fredoka text-xl '>Team Activities</h3>
              </div>
              <div>
                <p className=''>Lorem spatum sed pulvar gravida hendrerit lectusa. Sed nisi lacus sed viverra.</p>
              </div> 
            </div>

            {/* Card one */}
            <div className='shadow-md flex flex-col p-5 space-y-5 text-center'>
              <div>    
                 <Image
                    src="/images/heros/bghero.jpg"
                    alt="blog"
                    width={1000}
                    height={240}
                    style={{
                      maxWidth: "100%",
                      height: "220px",
                      objectFit: "cover",
                    }}
                    className=" max-w-full max-h-50 rounded-md"
                  /></div>
              <div>
                <h3 className='font-semibold fredoka text-xl '>Individual Activities</h3>
              </div>
              <div>
                <p className=''>Lorem spatum sed pulvar gravida hendrerit lectusa. Sed nisi lacus sed viverra.</p>
              </div> 
            </div>
          </div>
        </div>      
      </div>
    </section>
  )
}
