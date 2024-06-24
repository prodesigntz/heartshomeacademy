import React from 'react';
import { HiOutlineFaceFrown } from 'react-icons/hi2';
import { FaPencilRuler } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { FaChildren } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";

import { Title } from '../texties'

export default function Accomplishment() {
  return (
    <section className="respons bg-[#f8941d] rounded-lg">
      <div className="psektion  sektion2 md:grid-cols-4">
        <div className="flex flex-col text-center shadow-sm rounded ">
          <div className="flex justify-center ">
            <FaChildren className="text-4xl md:text-6xl  text-center" />
          </div>
          <Title place="" first="354+" />
          <p className="font-bold text-sm md:text-lg">Students Admission</p>
        </div>
        <div className=" flex flex-col text-center  shadow-sm rounded">
          <div className="flex justify-center">
            <FaUsers className="text-4xl md:text-6xl  text-center" />
          </div>
          <Title first="354+" />
          <p className="font-bold text-sm md:text-lg">No. of Teachers</p>
        </div>
        <div className=" flex flex-col text-center shadow-sm rounded">
          <div className="flex justify-center">
            <MdSchool className="text-4xl md:text-6xl  text-center" />
          </div>
          <Title first="354+" />
          <p className="font-bold text-sm md:text-lg">No. of Classes</p>
        </div>
        <div className=" flex flex-col text-center shadow-sm rounded">
          <div className="flex justify-center">
            <FaPencilRuler className="text-4xl md:text-6xl  text-center" />
          </div>
          <Title first="354+" />
          <p className="font-bold text-sm md:text-lg">Years of Experience</p>
        </div>
      </div>
    </section>
  );
}
