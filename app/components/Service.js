import React from "react";
import Accordion from "@/components/ui/Accordion";
import AccordionSer from "@/components/ui/AccordionSer";
import Image from "next/image";
import ServiceImg from "@/public/images/service.png";
import ServiceDes from "@/components/ui/ServiceDes";
import AccordionGroup from "@/components/ui/AccordionGroup";
const Service = () => {
  return (
    <section className="W-[100%]   flex justify-center py-10 z-10 max-sm:hidden">
      <div className="w-[70%] ">
        <div>
          <div className="text-center">
            <h6 className="uppercase font-bold text-grey text-2xl ">
              our service
            </h6>
            <h3 className="text-4xl font-bold text-red mt-4 ">
              Conceptualization,{" "}
              <span className="text-grey">Transformation </span>And Creativity
            </h3>
            <p className="mt-4 text-grey2">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam
            </p>
          </div>

          <div className="flex mt-6">
          
              <AccordionGroup>
              <AccordionSer title="Logo Designing" color="bg-[#CB0000]">
                <ServiceDes />
              </AccordionSer>
              <AccordionSer title="App Development" color="bg-[#A40000]">
                <ServiceDes />
              </AccordionSer>
              <AccordionSer title="Digital Marketing" color="bg-[#8A0000]">
                <ServiceDes />
              </AccordionSer>
              <AccordionSer title="Branding" color="bg-[#6B0000]">
                <ServiceDes />
              </AccordionSer>
              <AccordionSer title="SEO" color="bg-[#B40B0B]">
                <ServiceDes />
              </AccordionSer>
              <AccordionSer title="Website Development" color="bg-[#8A0000]">
                <ServiceDes />
              </AccordionSer>
              </AccordionGroup>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
