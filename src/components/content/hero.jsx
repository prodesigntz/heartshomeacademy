import React from "react";
import { HeaderTitle } from "../textties";

export default function Hero() {
  return (
    <section className="psektion relative text-white bg-[url('/images/heros/bghero.jpg')] bg-cover bg-center  bg-slate-700 bg-blend-overlay bg-no-repeat">
      <div className="respons sektion md:grid-cols-2">
        <div>
          <HeaderTitle
            place="start fredoka"
            subHeading="Building Blocks for Dreams"
            first="A Brighter Future For All Children"
          />
        </div>
        <div>2</div>
      </div>
    </section>
  );
}
