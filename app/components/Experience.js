import Link from "next/link";
import React from "react";
import mockup from "@/public/images/mockup.png"
import Image from "next/image";
const Experience = () => {
  return (
    <section className="W-[100%]   flex justify-center py-10 z-10 ">
      <div className="w-[70%] ">

        <div className="flex flex-col sm:flex-row gap-8 h-full">
            
        <div className="w-[100%] sm:w-[40%] relative h-[100%]">
                <div className="bg-red border-radius__image absolute top-0 h-[70%] w-[100%] z-10"></div>
                <Image src={mockup} height={500} className="relative z-20 pt-10"/>
                
            </div>

            <div className="w-[100%] sm:w-[60%] max-sm:order-last">
                <h3 className="text-red text-4xl font-bold">20+ Years  <span className="text-grey ">Of Experience</span></h3>
                <p className="py-6 text-grey2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita 
                    kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                    , consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                     erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, 
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                <div className="flex flex-row gap-6">
                    <Link href="/" className="border-radius text-white bg-grey ">Discuss More</Link>
                    <button className="border-radius text-white bg-red border border-grey btn-red__hover ">Live Chat</button>
                </div>
            </div>

            
        </div>




        </div>
    </section>
  );
};

export default Experience;
