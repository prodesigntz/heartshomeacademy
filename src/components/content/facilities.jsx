import React from 'react'
import { HomeParagraph, Title } from '../texties'
import { Button } from '../ui/button'
import Image from 'next/image'

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
         {/* card sectrion */}
         <div className='shadow-md flex flex-col p-5 space-y-5 text-center hover:text-white hover:bg-heartssecondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-md duration-300 '>
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
                <h3 className='font-semibold fredoka text-xl '>Healthy Foods</h3>
              </div>
              <div>
                <p className=''>Lorem spatum sed pulvar gravida hendrerit lectusa. Sed nisi lacus sed viverra.</p>
              </div> 
            </div>

             {/* card sectrion */}
             <div className='shadow-md flex flex-col p-5 space-y-5 text-center hover:text-white hover:bg-heartssecondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-md duration-300 '>
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
                <h3 className='font-semibold fredoka text-xl '>Transportation</h3>
              </div>
              <div>
                <p className=''>Lorem spatum sed pulvar gravida hendrerit lectusa. Sed nisi lacus sed viverra.</p>
              </div> 
            </div>

             {/* card sectrion */}
             <div className='shadow-md flex flex-col p-5 space-y-5 text-center hover:text-white hover:bg-heartssecondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-md duration-300 '>
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
                <h3 className='font-semibold fredoka text-xl '>Healthy Foods</h3>
              </div>
              <div>
                <p className=''>Lorem spatum sed pulvar gravida hendrerit lectusa. Sed nisi lacus sed viverra.</p>
              </div> 
            </div>

          {/* card sectrion */}
            <div className='shadow-md flex flex-col p-5 space-y-5 text-center hover:text-white hover:bg-heartssecondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-md duration-300 '>
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
