import MarsComparisonCatalog from "./photos/MarsComparisonCatalog.png";
import CraterJau from './photos/CraterJau.jpg';
import CuriositysMarkerBandValley from './photos/CuriositysMarkerBandValley.jpg'
import Perseverance from './photos/Perseverance.jpg'
import Ingenuity from './photos/Ingenuity.jpg'
import PerseveranceDuringConjunction from './photos/PerseveranceDuringConjunction.jpg';
import PerseveranceAtBerea from './photos/PerseveranceAtBerea.jpg'


function generateMarsRelatedID(index) {
  const averageSurfaceTemperature = -80; // in degrees Celsius (just an example)
  return Math.abs(index * averageSurfaceTemperature);
}

const data = [
   {
    id: generateMarsRelatedID(0),
    image: MarsComparisonCatalog,
    description: `NASA’s Curiosity Mars rover captured this 360-degree panorama while parked below Gediz Vallis Ridge (the hill-like slope at right).`
   },
   {
    id: generateMarsRelatedID(1),
    image: CraterJau,
    description: `Curiosity Views a Crater at 'Jau'`
   },
   {
    id: generateMarsRelatedID(2),
    image: CuriositysMarkerBandValley,
    description: `Curiosity's 'Postcard' of 'Marker Band Valley'`
   },
   {
    id: generateMarsRelatedID(3),
    image: Perseverance,
    description: `Perseverance Rover Completing Mars Sample Depot`
   },
   {
    id: generateMarsRelatedID(4),
    image: Ingenuity,
    description: `Perseverance rover Checks Out Ingenuity`
   },
   {
    id: generateMarsRelatedID(5),
    image: PerseveranceDuringConjunction,
    description: `Perseverance's Parking Spot During Conjunction`
   },
   {
    id: generateMarsRelatedID(6),
    image: PerseveranceAtBerea,
    description: `Perseverance Samples 'Berea'`
   },
];


export {data}