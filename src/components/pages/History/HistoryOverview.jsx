import React from "react";
import yuriGagarin from "./images/yuriGagarin.jpeg";
import Sputnik1 from "./images/Sputnik1.jpeg";
import buzzAldrinMoonLanding from "./images/buzzAldrinMoonLanding.jpeg";
import spaceshuttle from "./images/spaceshuttle.jpeg";

const HistoryOverview = () => {
  const data = [
    {
      id: "01",
      title: "First artificial Earth satellite:",
      img: Sputnik1,
      credit: "wikipedia.",
      creditLink: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fid.wikipedia.org%2Fwiki%2FSputnik_1&psig=AOvVaw1dq3WqIsB8I1mh-mj2P0Cn&ust=1701751988244000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCW0Kj-9IIDFQAAAAAdAAAAABAE",
      text: `Sputnik 1, the world's first artificial satellite, marked the dawn of
  the space age and revolutionized our understanding of the Earth and
  beyond. Launched by the Soviet Union on October 4, 1957, Sputnik 1 was
  a spherical metal orb equipped with radio transmitters that emitted
  distinctive beeping signals as it orbited the planet. This iconic
  satellite not only heralded a new era in space exploration but also
  sparked the Space Race between the United States and the Soviet Union.
  Sputnik 1's successful mission demonstrated humanity's capability to
  reach beyond the confines of Earth's atmosphere, opening the door to a
  realm of possibilities for scientific discovery and technological
  innovation. Its beeping signals resonated across the globe, capturing
  the collective imagination and instigating a rapid acceleration of
  space exploration efforts worldwide. Sputnik 1's historic journey into
  orbit paved the way for subsequent space missions, leaving an
  indelible mark on the trajectory of human achievement in the cosmos.`,
    },
    {
      id: "02",
      title: "First man in space:",
      img: yuriGagarin,
      credit: "bobo.grid",
      creditLink: "https://bobo.grid.id/read/08674014/yuri-gagarin-manusia-pertama-di-ruang-angkasa?page=all",
      text: ` Yuri Gagarin, the first human to journey into space, stands as an
      enduring symbol of human courage, exploration, and achievement. His
      historic flight aboard the Vostok 1 spacecraft on April 12, 1961,
      marked a pivotal moment in the annals of space exploration. Gagarin's
      fearless venture into the cosmos not only solidified his place in
      history but also propelled humanity into a new era of scientific
      discovery. His accomplishments transcended national boundaries,
      emphasizing the shared aspirations of the global community to explore
      the unknown. Gagarin's pioneering spirit and unwavering dedication to
      space exploration laid the foundation for future generations of
      astronauts and scientists. His legacy continues to inspire, reminding
      us of the boundless possibilities that await those who dare to venture
      beyond Earth's confines. Yuri Gagarin's contribution to advancing
      humanity into space is immeasurable, and his name resonates with the
      profound impact that a single individual can have on the course of
      human history.`,
    },
    {
      id: "03",
      title: "The Apollo Program:",
      img: buzzAldrinMoonLanding,
      credit: "NASA",
      creditLink: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nasa.gov%2Fimage-article%2Fbuzz-aldrin-moon%2F&psig=AOvVaw3V3iuFdL1s5GuDQk1jnpDe&ust=1701755565109000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCODlk9KL9YIDFQAAAAAdAAAAABAO",
      text: `The Apollo program stands as an unparalleled chapter in the history of
      space exploration, embodying the spirit of human curiosity and
      determination to conquer the cosmos. Launched by NASA in 1961 with the
      goal of landing humans on the Moon, Apollo marked a series of
      groundbreaking missions that culminated in the historic Apollo 11
      landing on July 20, 1969. Led by astronauts Neil Armstrong, Buzz
      Aldrin, and Michael Collins, Apollo 11 saw Armstrong take the first
      steps on the lunar surface, delivering the iconic line, 'That's one
      small step for [a] man, one giant leap for mankind.' The subsequent
      Apollo missions continued to push the boundaries of exploration and
      scientific discovery, with each crew overcoming challenges and
      expanding our understanding of lunar geology and the challenges of
      human space travel. Notably, Apollo 13, while marred by a technical
      malfunction, showcased the resilience and resourcefulness of NASA as
      the crew safely returned to Earth. The Apollo program, with its blend
      of technological innovation, bravery, and scientific achievement,
      remains an enduring testament to humanity's ability to reach for the
      stars and achieve the seemingly impossible`,
    },
    {
      id: "04",
      title: "The Space Shuttle Era:",
      img: spaceshuttle,
      credit: "wikipedia",
      creditLink: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSpace_Shuttle&psig=AOvVaw0Rd1C0rJCyrbfvp5kFMYZf&ust=1701755691935000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMjY4I6M9YIDFQAAAAAdAAAAABAE",
      text: `The Space Shuttle era, spanning from 1981 to 2011, represented a
      transformative chapter in space exploration, marked by the launch of
      the Space Shuttle fleet and the development of reusable spacecraft.
      The Space Shuttle program, inaugurated with the launch of the Space
      Shuttle Columbia on April 12, 1981, aimed to make space travel more
      routine and accessible. The Shuttle fleet, comprising orbiters
      Atlantis, Challenger, Discovery, Endeavour, and the ill-fated
      Columbia, facilitated a myriad of missions, from deploying satellites
      and conducting scientific research to assembling and servicing the
      International Space Station (ISS). Notably, the construction of the
      ISS, a collaborative effort involving multiple countries, was a
      significant achievement during this era. However, the program also
      faced challenges, including the tragic losses of the Challenger in
      1986 and Columbia in 2003. These incidents prompted reevaluations of
      space shuttle safety protocols. Despite these setbacks, the Space
      Shuttle era laid the groundwork for future space endeavors, showcasing
      the capabilities of reusable spacecraft and contributing valuable
      insights to human spaceflight.`,
    },
    {
      id: "05",
      title: "Beyond Earth's Horizon: A Unified Legacy from Sputnik to Mars",
      img: null,
      text: `The collective achievements of Sputnik 1, Yuri Gagarin's pioneering
      journey into space, the Apollo program, and the Space Shuttle era have
      collectively propelled humanity into an era of unprecedented knowledge
      and exploration. Sputnik 1, with its simple yet powerful beep,
      heralded the dawn of the space age, igniting a fervor for exploration
      that transcended national boundaries. Yuri Gagarin's orbital flight in
      1961 exemplified the triumph of human ingenuity and courage. The
      Apollo program, with its moon landings, not only showcased
      technological prowess but also captured the imagination of the world,
      instilling a sense of possibility and inspiring generations to come.
      The Space Shuttle era, marked by reusable spacecraft and contributions
      to the International Space Station, laid the groundwork for
      collaborative, long-term space endeavors. The result of the intense
      Space Race competition between the United States and the Soviet Union
      was not just landing on the Moon but a broader advancement of
      technology and scientific knowledge. Today, beyond Earth, robotic
      explorers like the Mars rovers continue the legacy, expanding our
      understanding of the cosmos and paving the way for potential future
      human missions to the Red Planet. The journey from Sputnik to Mars
      stands as a testament to humanity's innate curiosity and capacity for
      exploration, forging a path into the cosmos for the betterment of our
      collective knowledge and the human spirit.`,
    },
  ];

  return (
    <main className="w-[80%] mx-auto mt-20 py-5 max-w-7xl">
      {data.map((topic) => {
        const { id, title, text, img, credit, creditLink } = topic;
        return (
          <div key={id} className="mb-14">
            <h2 className="text-4xl mb-5 text-DarkSlateGray font-bold">
              {title}{" "}
            </h2>
            {img !== null && (
              <>
              <div className="max-w-xl">
                <img
                  className="w-full h-full object-cover"
                  src={img}
                  alt="Mars size comparison"
                  />
              </div>
              <div className='mb-5'>
               <a href={creditLink} className="mb-5 text-sm">credit: {credit}</a>
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

export default HistoryOverview;