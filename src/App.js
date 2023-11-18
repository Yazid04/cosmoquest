import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/shared/ErrorPage";
import Home from "./components/pages/Home/Home";

import WondrousWorlds from "./components/pages/WondrousWorlds";
import SolarSystemExploration from "./components/pages/SolarSystemExploration";
import Astronomy from "./components/pages/Astronomy";

import BlackHoles from "./components/pages/BlackHoles";
import Galaxies from "./components/pages/Galaxies";
import Pulsars from "./components/pages/Pulsars";

import HistoryOfSpaceExploration from "./components/pages/HistoryOfSpaceExploration";
import AdvancementsInRocketry from "./components/pages/AdvancementsInRocketry";

function App() {
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
        <Route path="/CosmicExplorations/Astronomy" element={<Astronomy />} />

        <Route path="/CelestialWonders/BlackHoles" element={<BlackHoles />} />

        <Route path="/CelestialWonders/Galaxies" element={<Galaxies />} />
        <Route path="/CelestialWonders/Pulsars" element={<Pulsars />} />

        <Route
          path="/spaceHeritageAndInnovation/HistoryOfSpaceExploration"
          element={<HistoryOfSpaceExploration />}
        />
        <Route
          path="/spaceHeritageAndInnovation/AdvancementsInRocketry"
          element={<AdvancementsInRocketry />}
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
