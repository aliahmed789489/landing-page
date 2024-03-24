import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import man3 from "@/public/images/man3.png";

const Testimonials = () => {
  return (
    <section className="W-[100%]   flex justify-center py-10 z-10 ">
      <div className="w-[70%] ">
        <div>
          <div className="text-center">
            <h6 className="uppercase font-bold text-grey text-2xl ">
              Testimonials
            </h6>
            <h3 className="text-4xl font-bold text-red mt-4 ">
              Our<span className="text-grey">Satisfied </span>Clients
            </h3>
          </div>

          <div className="mt-6">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <div className="flex flex-col sm:flex-row gap-8 h-full">
                    <div className="w-[100%] sm:w-[40%] relative h-[100%]">
                      <Image
                        src={man3}
                        height={500}
                        className="relative z-20 "
                      />
                    </div>

                    <div className="w-[100%] sm:w-[60%] max-sm:order-last mt-16">
                      <p className="py-6 text-grey2">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet. Lorem ipsum dolor sit amet ,
                        consetetur sadipscing elitr, .
                      </p>
                      <div className="flex flex-row justify-between gap-6 mt-6">
                        <h3 className="text-3xl font-bold text-red">
                          Mark <span className="text-grey">Allen</span>
                        </h3>
                        <div className="flex flex-row gap-6">
                          <div className="bg-red w-8 h-16 "></div>
                          <div className="bg-red w-8 h-16 "></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex flex-col sm:flex-row gap-8 h-full">
                    <div className="w-[100%] sm:w-[40%] relative h-[100%]">
                      <Image
                        src={man3}
                        height={500}
                        className="relative z-20 "
                      />
                    </div>

                    <div className="w-[100%] sm:w-[60%] max-sm:order-last mt-16">
                      <p className="py-6 text-grey2">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet. Lorem ipsum dolor sit amet ,
                        consetetur sadipscing elitr, .
                      </p>
                      <div className="flex flex-row justify-between gap-6 mt-6">
                        <h3 className="text-3xl font-bold text-red">
                          Mark <span className="text-grey">Allen</span>
                        </h3>
                        <div className="flex flex-row gap-6">
                          <div className="bg-red w-8 h-16 "></div>
                          <div className="bg-red w-8 h-16 "></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex flex-col sm:flex-row gap-8 h-full">
                    <div className="w-[100%] sm:w-[40%] relative h-[100%]">
                      <Image
                        src={man3}
                        height={500}
                        className="relative z-20 "
                      />
                    </div>

                    <div className="w-[100%] sm:w-[60%] max-sm:order-last mt-16">
                      <p className="py-6 text-grey2">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet. Lorem ipsum dolor sit amet ,
                        consetetur sadipscing elitr, .
                      </p>
                      <div className="flex flex-row justify-between gap-6 mt-6">
                        <h3 className="text-3xl font-bold text-red">
                          Mark <span className="text-grey">Allen</span>
                        </h3>
                        <div className="flex flex-row gap-6">
                          <div className="bg-red w-8 h-16 "></div>
                          <div className="bg-red w-8 h-16 "></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
