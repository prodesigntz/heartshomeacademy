import React from 'react'
import { HomeParagraph, Title } from '../texties'
import { Button } from '../ui/button'

export default function Intro() {
  return (
    <section className="psektion bg-gradient-to-t from-[#ffefe2] to-white">

     
     <div className="respons sektion md:grid-cols-5">
        {/* image introduction */}
        <div className="col-span-2 ">image</div>

        {/* Introduction about */}
        <div className="col-span-2 ">
          <Title
              place="start "
              subHeading="About Us"
              first="We Educate Knowledge & Essential Skills!"
            />
            <HomeParagraph place="start" content=" 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis saepe incidunt perspiciatis minima nam molestiae, ex sapiente nostrum a repellat alias dolores qui facere, rerum sequi impedit optio, minus aut. "/>
              <div className=" flex items-center space-x-5">
                <Button className="rounded-full text-lg p-6 bg-heartssecondary">Read More</Button>
             </div>  
        </div>

        {/* Introudction  inspiring */}
        <div className="flex flex-col">image3</div>
      </div>
    </section>
  )
}
