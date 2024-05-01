import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SeasonsList from "./components/SeasonsList/SeasonsList";
import EpisodeDetails from "./components/EpisodeDetails/EpisodeDetails";
import CharacterProfile from "./components/CharacterProfile/CharacterProfile";
import SmallvilleMap from "./components/SmallvilleMap/SmallvilleMap";
import Quiz from "./components/Quiz/Quiz";
import CommentsSection from "./components/CommentsSection/CommentsSection";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Season1 from "./components/Season1/Season1";
import Season3 from "./components/Season3/Season3";
import Season2 from "./components/Season2/Season2";
import Navigation from "./components/Navigation/Navigation";
import Personnages from "./components/Personnages/Personnages";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/CommentsSection" Component={CommentsSection} />
          <Route path="/CharacterProfile" Component={CharacterProfile} />
          <Route path="/EpisodeDetails" Component={EpisodeDetails} />
          <Route path="/Season1" Component={Season1} />
          <Route path="/Season2" Component={Season2} />
          <Route path="/Season3" Component={Season3} />
          <Route path="/Personnages" Component={Personnages} />
          <Route path="*" element={<ErrorPage />} />

          {/* Ajoutez les autres routes ici */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
