import Link from "next/link";
import React from "react";
import man2 from "@/public/images/man2.png"
import Image from "next/image";
const About = () => {
  return (
    <section className="W-[100%]   flex justify-center py-10 z-10 ">
      <div className="w-[70%] ">

        <div className="flex flex-col sm:flex-row gap-8 h-full">

            <div className="w-[100%] sm:w-[60%] max-sm:order-last">
                <h3 className="text-red text-4xl font-bold">About <span className="text-grey ">Us</span></h3>
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

            <div className="w-[100%] sm:w-[40%] relative h-[100%]">
                <div className="bg-red border-radius__image absolute bottom-0 h-[90%] w-[100%] z-10"></div>
                <Image src={man2} height={400} className="relative z-20"/>
                
            </div>
        </div>




        </div>
    </section>
  );
};

export default About;
