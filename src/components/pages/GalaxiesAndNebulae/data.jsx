import andromeda from "./imgs/andromeda.jpeg";
import HolmbergIIIrregularGalaxy from "./imgs/HolmbergIIIrregularGalaxy.jpeg";
import NGC4150EllipticalGalaxy from "./imgs/NGC4150EllipticalGalaxy.jpeg";
import NGC1300Galaxy from "./imgs/NGC1300Galaxy.jpeg";
import andromedaGalaxy from "./imgs/andromedaGalaxy.jpeg";

import orionNubula from './imgs/orionNubula.jpeg'
import nebulaImg from './imgs/nebulaImg.jpeg'
import southernRingNebula from './imgs/southernRingNebula.png'


const Galaxies = [
  {
    id: 1,
    image: andromeda,
  },
  {
    id: 2,
    image: NGC1300Galaxy,
  },
  {
    id: 3,
    image: HolmbergIIIrregularGalaxy,
  },
  {
    id: 4,
    image: andromedaGalaxy,
  },
  {
    id: 5,
    image: NGC4150EllipticalGalaxy,
  },
];

const Nebulae = [
 {
  id: 6,
  image: southernRingNebula,
 },
 {
  id: 7,
  image: nebulaImg,
 },
 {
  id: 8,
  image: orionNubula,
 },
]

export {Galaxies, Nebulae};
