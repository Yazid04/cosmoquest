import React from "react";
import ancientRockets from "./images/ancientRockets.jpeg";
import Falcon9 from "./images/Falcon9.jpeg";

const RocketryOverview = () => {
  const data = [
    {
      id: "01",
      title: "Introduction:",
      img: ancientRockets,
      credit: "ThoughtCo",
      creditLink:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thoughtco.com%2Fgunpowder-history-1991395&psig=AOvVaw02s7MvH1YmZ7DyR6hhnh1J&ust=1701757531777000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMChifyS9YIDFQAAAAAdAAAAABAE",
      text: `Rocketry stands at the forefront of humanity's exploration of space,
    representing the convergence of scientific ingenuity and technological
    prowess. From its humble beginnings as ancient Chinese
    gunpowder-filled tubes to the monumental achievements of the space
    age, the history of rocketry mirrors our ceaseless quest to reach the
    stars. As we delve into the advancements of contemporary rocketry, it
    becomes evident that these innovations not only propel us into the
    cosmos but also reshape our understanding of the universe and our
    place within it.`,
    },
    {
      id: "02",
      title: "Milestones in Rocketry:",
      img: null,
      text: `The annals of rocketry are etched with historic milestones that have
    propelled humanity beyond Earth's confines. From the pioneering work
    of visionaries like Robert Goddard to the transformative era of the
    Space Race, these milestones include the first liquid-fueled rocket
    launch, Yuri Gagarin's historic orbit, and the Apollo moon landings.
    Each achievement not only marked a triumph in technological capability
    but also symbolized humanity's indomitable spirit and ambition to
    conquer the final frontier.`,
    },
    {
      id: "03",
      title: "Modern Propulsion Technologies:",
      img: null,
      text: `In the realm of modern rocketry, propulsion technologies have
    undergone a revolutionary transformation. Advances in propulsion now
    include sophisticated engines utilizing liquid and solid fuels, as
    well as cutting-edge developments such as ion propulsion. These
    innovations enhance efficiency, reduce fuel consumption, and
    contribute to extended mission durations. With the development of
    high-thrust, high-efficiency engines, today's rockets boast
    capabilities that were once deemed futuristic, ushering in a new era
    of space exploration.`,
    },
    {
      id: "04",
      title: "Reusable Rocket Technology:",
      img: Falcon9,
      credit: "Space.com",
      creditLink:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.space.com%2Fspacex-transporter-2-rocket-landing-tracking-camera-video&psig=AOvVaw0UNHN-1eXYTKvB5HPKLZY2&ust=1701757654294000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDYs7aT9YIDFQAAAAAdAAAAABAE",
      text: `A paradigm shift in rocketry occurred with the introduction of
    reusable rocket technology. SpaceX's Falcon 9, a pioneering example,
    demonstrated the feasibility of landing and refurbishing rocket
    components for subsequent launches. This breakthrough has
    significantly lowered launch costs, making space exploration more
    economically viable. Reusable rocket technology not only marks a
    triumph in engineering but also positions us on the precipice of more
    frequent and sustainable access to space.`,
    },
    {
      id: "05",
      title: "Future Trends and Technologies:",
      img: null,
      text: `As we gaze into the future of rocketry, a constellation of tantalizing
    possibilities emerges. The ongoing pursuit of nuclear propulsion
    systems promises unparalleled efficiency for deep-space missions,
    potentially revolutionizing our approach to interplanetary travel.
    Advanced materials, such as those engineered for extreme conditions,
    may enable the construction of spacecraft capable of withstanding the
    rigors of extended space exploration. These burgeoning technologies
    underscore the dynamic nature of rocketry, signaling a future where
    our cosmic aspirations continue to unfold.`,
    },
  ];

  return (
    <main className="w-[80%] mx-auto mt-20 py-5 max-w-7xl">
      {data.map((item) => {
        const { id, title, img, text, credit, creditLink } = item;
        return (
          <div className="mb-14" key={id}>
            <h2 className="text-4xl mb-5 text-DarkSlateGray font-bold">
              {title}
            </h2>
            {img !== null && (
              <>
                <div className="mb-2 max-w-xl">
                  <img
                    className="w-full h-full object-cover"
                    src={img}
                    alt={title}
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
  );
};

export default RocketryOverview;
