import React from 'react'
import { HomeParagraph, Title } from '../texties'
import { Button } from '../ui/button'

export default function Programs() {
  return (
    <section className="psektion bg-[#ffefe2]">
      <div className="respons space-y-10">
       {/* top column */}
        <div className="sektion md:grid-cols-3">
          <div>gif</div>
          <div>
          <Title
              place=""
              subHeading="Education Programs"
              first="Step By Step Systematic Education"
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
                <div className="">1</div>   
                <div className="flex flex-col space-y-3">
                  <h2 className="text-2xl fredoka">Infants</h2>
                  <h3 className="">6 - 24 Months</h3>
                  <p className="">Eu turpis egestas pretium aenean pharetra magna ac.</p>
                </div>
              </div>
             
              {/* card one */} 
              <div className="flex items-center justify-between rounded-3xl p-10 bg-white shadow-md">
                <div className="">1</div>
                <div className="">2</div>
              </div>
            
              {/* card one */}
              <div className="flex items-center justify-between rounded-3xl p-10 bg-white shadow-md">
                <div className="">1</div>
                <div className="">2</div>
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
