import React, {useEffect} from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import ErrorPage from "./components/shared/ErrorPage";
import Home from "./components/pages/Home/Home";

import WondrousWorlds from "./components/pages/Exoplanets/WondrousWorlds";
import SolarSystemExploration from "./components/pages/solarSystem/SolarSystemExploration";
import Mars from "./components/pages/Mars/Mars";

import BlackHoles from "./components/pages/BlackHoles/BlackHoles";
import GalaxiesAndNebulae from "./components/pages/GalaxiesAndNebulae/GalaxiesAndNebulae";

import HistoryOfSpaceExploration from "./components/pages/History/HistoryOfSpaceExploration";
import AdvancementsInRocketry from "./components/pages/rocketryAdvancements/AdvancementsInRocketry";
import InternationalSpaceStation from './components/pages/ISS/InternationalSpaceStation'

function App() {
  const location = useLocation();


  useEffect(() => {
    // Check if the current route is "/CelestialWonders/BlackHoles"
    const isBlackHolesPage = location.pathname === '/CelestialWonders/BlackHoles';

    // Apply inline styles to the body element
    document.body.style.backgroundColor = isBlackHolesPage ? 'black' : '#D9D9D9';
  }, [location.pathname]); // Re-run the effect when the pathname changes


  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route
          path="/CosmicExplorations/WondrousWorlds"
          element={<WondrousWorlds />}
        />
        <Route
          path="/CosmicExplorations/SolarSystemExploration"
          element={<SolarSystemExploration />}
        />
       
        <Route path="/CosmicExplorations/Mars" element={ <Mars /> } />

        <Route path="/CelestialWonders/BlackHoles" element={<BlackHoles />} />

        <Route path="/CelestialWonders/GalaxiesAndNebulae" element={<GalaxiesAndNebulae />} />

        <Route
          path="/spaceHeritageAndInnovation/HistoryOfSpaceExploration"
          element={<HistoryOfSpaceExploration />}
        />
        <Route
          path="/spaceHeritageAndInnovation/AdvancementsInRocketry"
          element={<AdvancementsInRocketry />}
        />
        <Route
          path="/spaceHeritageAndInnovation/InternationalSpaceStation"
          element={<InternationalSpaceStation />}
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;

// apply sidebar - DONE
// attach links and pages - DONE
// hero content 
