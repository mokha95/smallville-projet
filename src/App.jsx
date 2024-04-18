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
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/CommentsSection" Component={CommentsSection} />
        <Route path="/CharacterProfile" Component={CharacterProfile} />
        <Route path="/EpisodeDetails" Component={EpisodeDetails} />
        <Route path="*" element={<ErrorPage />} />

        {/* Ajoutez les autres routes ici */}
      </Routes>
    </Router>
  );
}

export default App;
