import React from "react";
import ISS from "./images/ISS.jpeg";

const ISSOverview = () => {
  const data = [
    {
      id: "01",
      title: "1. Overview of the ISS:",
      img: ISS,
      credit: "NASA",
      creditLink: "https://www.nasa.gov/international-space-station/",
      text: `The International Space Station (ISS) is a marvel of human ingenuity
      and international collaboration. Its construction began in 1998, with
      the launch of the Russian module, Zarya. Over the following years,
      various modules were added, piece by piece, through the efforts of
      space agencies worldwide. The ISS orbits the Earth at an average
      altitude of approximately 420 kilometers (about 261 miles) and travels
      at a speed of 28,000 kilometers per hour (about 17,500 miles per
      hour). This multinational space station is a symbol of unity,
      involving space agencies from the United States (NASA), Russia
      (Roscosmos), Europe (ESA), Japan (JAXA), and Canada (CSA). The
      station's large solar arrays, spanning an area of about 2,500 square
      meters, provide the necessary power for its operations. The ISS serves
      as a unique space laboratory where scientific research and experiments
      are conducted in microgravity, contributing significantly to our
      understanding of various scientific disciplines.`,
    },
    {
      id: "02",
      title: "2. International Collaboration:",
      img: null,
      text: `One of the most remarkable aspects of the International Space Station
      (ISS) is the unprecedented level of international collaboration
      involved in its creation and operation. The ISS is a joint project
      that brings together space agencies from different countries,
      fostering cooperation beyond terrestrial borders. The United States,
      Russia, Europe, Japan, and Canada have each contributed modules,
      technology, and expertise to make the ISS a reality. The collaboration
      extends to the astronauts aboard the station, who often represent
      various nations. This joint effort showcases the peaceful use of outer
      space and serves as a testament to what humanity can achieve when
      nations work together for a common goal. The ISS exemplifies the idea
      that exploration and scientific discovery transcend geopolitical
      boundaries.`,
    },
    {
      id: "03",
      title: "3. Research and Experiments:",
      img: null,
      text: `The International Space Station (ISS) stands as a beacon of scientific
      exploration in the microgravity environment of space. Its unique
      conditions enable a wide range of research and experiments across
      diverse scientific disciplines. Scientists on the ISS conduct
      experiments in physics, biology, astronomy, and materials science,
      taking advantage of the weightless environment to study phenomena not
      possible on Earth. Biomedical research on the ISS contributes to our
      understanding of how spaceflight affects the human body, with
      implications for long-duration space missions. Additionally, the
      station serves as a platform for Earth observation, climate research,
      and technology development. Its role as a floating laboratory has
      yielded valuable insights into fluid dynamics, combustion, and the
      behavior of materials in space, advancing scientific knowledge and
      benefitting life on Earth.`,
    },
  ];

  return (
    <div className="w-full mb-[0.17rem] shadow-2xl">
      <main className="w-[80%] mx-auto mt-20 py-5 max-w-7xl">
        {data.map((item) => {
          const { id, title, img, text, credit, creditLink } = item;
          return (
            <div className="mb-14" key={id}>
              <h2 className="text-3xl my-3 font-bold text-DarkSlateGray">
                {title}
              </h2>
              {img !== null && (
                <>
                  <div className="mb-2 text-DarkSlateGray lg:max-w-3xl lg:h-[30rem]">
                    <img
                      className="w-full h-full object-cover"
                      src={img}
                      alt="Super Earth Illustration"
                    />
                  </div>
                  <div className="mb-5">
                    <a href={creditLink} className="mb-5 text-sm">
                      credit: {credit}
                    </a>
                  </div>
                </>
              )}
              <p className="leading-loose font-Playpen">{text}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default ISSOverview;
