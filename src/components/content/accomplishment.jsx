import React from 'react';
import { HiOutlineFaceFrown } from 'react-icons/hi2';
import { FaPencilRuler } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { FaChildren } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";

import { Title } from '../texties'

export default function Accomplishment() {
  return (
    <section className="respons  rounded-lg">
      <div className="psektion  sektion2 md:grid-cols-4">
        <div className="p-4 bg-[#f8941d] flex flex-col text-center shadow-md rounded ">
          <div className="flex justify-center ">
            <FaChildren className="text-4xl md:text-6xl  text-center" />
          </div>
          <Title place="" first="40+" />
          <p className="font-bold text-sm md:text-lg">Students Admission</p>
        </div>
        <div className="p-4 bg-[#f8941d] flex flex-col text-center  shadow-md rounded">
          <div className="flex justify-center">
            <FaUsers className="text-4xl md:text-6xl  text-center" />
          </div>
          <Title first="12+" />
          <p className="font-bold text-sm md:text-lg">No. of Teachers</p>
        </div>
        <div className="p-4 bg-[#f8941d] flex flex-col text-center shadow-md rounded">
          <div className="flex justify-center">
            <MdSchool className="text-4xl md:text-6xl  text-center" />
          </div>
          <Title first="14+" />
          <p className="font-bold text-sm md:text-lg">No. of Classes</p>
        </div>
        <div className="p-4 bg-[#f8941d] flex flex-col text-center shadow-md rounded">
          <div className="flex justify-center">
            <FaPencilRuler className="text-4xl md:text-6xl  text-center" />
          </div>
          <Title first="6+" />
          <p className="font-bold text-sm md:text-lg">Years of Experience</p>
        </div>
      </div>
    </section>
  );
}
