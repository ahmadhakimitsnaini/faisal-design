import React from "react";

export const AboutDesigner = () => {
  return (
    <section className="bg-[#f5f5f7] text-[#0a0a0a] py-20 px-8 md:px-16 lg:px-24 rounded-3xl mt-12 mb-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium leading-[1.1] mb-16 tracking-tight">
          <span className="text-[#666] block mb-2">Designer</span>
          <span className="text-[#111] font-bold">For Everything You Want</span>
        </h2>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
          {/* Left Column: Image / Graphic Box */}
          <div className="bg-white border border-gray-200 aspect-square rounded-sm flex items-center justify-center p-8 shadow-sm relative">
            <div className="flex items-center gap-3 font-bold text-2xl lg:text-3xl tracking-widest text-black font-sans uppercase">
              <span>I'am</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="rotate-2"
              >
                <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
                <path d="M12 7l-1 2h2l-2 3h3l-2 3" />
              </svg>
              <span>Faisal</span>
            </div>

            {/* Small debris for the illustration feel */}
            <div className="absolute w-2 h-2 bg-black border border-black rotate-12 top-1/2 left-1/4 -mt-8"></div>
            <div className="absolute w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-transparent border-b-black -rotate-45 bottom-1/3 left-1/4"></div>
            <div className="absolute w-2 h-2 border-2 border-black rotate-45 bottom-1/4 right-1/4"></div>
          </div>

          {/* Right Column: Text content */}
          <div className="flex flex-col gap-8 text-[1.1rem] leading-relaxed text-[#444] font-sans max-w-2xl">
            <p>
              I'm Faisal, a UK-based music industry graphic designer and
              creative director specialising in merchandise with a vintage lean.
            </p>
            <p>
              Working for music legends, past and present, from The Beatles to
              Sabrina Carpenter, I've been trusted with my timeless and diverse
              design style and vision that can adapt to any era.
            </p>
            <p>
              As both a designer and a lifelong lover of music, my work is
              rooted in the deep passion I have for both art forms, fusing them
              in a way that feels uniquely human.
            </p>

            <div className="mt-4">
              <p className="italic text-sm font-sans tracking-widest uppercase text-[#666]">
                MA GRAPHIC DESIGN
                <br />
                LEEDS ARTS UNIVERSITY
              </p>
            </div>

            <div className="mt-2">
              <button className="bg-[#0066FF] hover:bg-blue-600 text-white px-8 py-3.5 rounded-full font-medium transition-colors text-base shadow-lg shadow-blue-500/30">
                Let's work together
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
