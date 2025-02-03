import { check2, grid, loading1 } from "../assets";
import { roadmap } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => {
  return (
    <Section id="roadmap" className="overflow-hidden">
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" title="CORE FEATURES" />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status =
              item.status === "done" ? "AI CREATIVITY" : "TRUSTFULL PROCESS";

            return (
              <div
                key={item.id}
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful
                    ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"
                    : "bg-n-6"
                }`}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      className="w-full"
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid background"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <img
                          className={`mr-2.5 ${
                            item.status !== "done" ? "animate-spin" : ""
                          }`}
                          src={item.status === "done" ? check2 : loading1}
                          width={16}
                          height={16}
                          alt={status}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>
                    <div className="mb-10 -my-10 -mx-15">
                      <img
                        className="w-50 h-50"
                        src={item.imageUrl}
                        alt={item.title}
                      />
                    </div>
                    <h3 className="h4 mb-4">{item.title}</h3>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <Gradient />
        </div>
        {/* <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="#roadmap">Our roadmap</Button>
        </div> */}
      </div>
    </Section>
  );
};

export default Roadmap;
