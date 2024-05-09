import React from 'react'
import { HomeParagraph, Title } from '../texties'
import { Button } from '../ui/button'
import Image from 'next/image'

export default function BlogSection() {
  return (
    <section className='psektion '>
      <div className="respons">
               {/* top column */}
                <div className="sektion md:grid-cols-3">
                  <div>gif</div>
                  <div>
                  <Title
                      place=""
                      subHeading="Blogs"
                      first="Get Our Updates"
                    />
                    <HomeParagraph place="center" content=" 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
                    
                  </div>
                  <div>image</div>
                </div>

                {/* bottom column */}
          <div className="flex flex-col space-y-10">
            <div className="sektion md:grid-cols-3">
              {/* card one */}
              <div className="flex items-center justify-between rounded-3xl p-10 bg-white shadow-md">
            
                <div className="flex flex-col space-y-3">
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
                  />
                  <h2 className="font-semibold fredoka text-xl">Infants</h2>
                  <p className="">Eu turpis egestas pretium aenean pharetra magna ac.</p>
                  <Button className="rounded-full text-center text-lg p-6 bg-heartssecondary hover:text-black">View More</Button>
           
                </div>
              </div>
             
              {/* card one */} 
              <div className="flex items-center justify-between rounded-3xl p-10 bg-white shadow-md">
            
            <div className="flex flex-col space-y-3">
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
              />
              <h2 className="font-semibold fredoka text-xl">Infants</h2>
              <p className="">Eu turpis egestas pretium aenean pharetra magna ac.</p>
              <Button className="rounded-full text-center text-lg p-6 bg-heartssecondary hover:text-black">View More</Button>
       
            </div>
          </div>
            
              {/* card one */}
              <div className="flex items-center justify-between rounded-3xl p-10 bg-white shadow-md">
            
            <div className="flex flex-col space-y-3">
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
              />
              <h2 className="font-semibold fredoka text-xl">Infants</h2>
              <p className="">Eu turpis egestas pretium aenean pharetra magna ac.</p>
              <Button className="rounded-full text-center text-lg p-6 bg-heartssecondary hover:text-black">View More</Button>
       
            </div>
            </div>
          </div>
            <div className=" flex items-center justify-center">
                <Button className="rounded-full text-center text-lg p-6 bg-heartssecondary">View More</Button>
            </div>   
           </div>
      </div>
    </section>
  )
}
