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
import PlaceList from "./components/PlaceList/PlaceList";
import PlaceDetail from "./components/PlaceDetail/PlaceDetail";
import Boutique from "./components/Boutique/Boutique";
import Entrainement from "./components/Entrainement/Entrainement";
import Accueil from "./components/Accueil/Accueil";
import Footer from "./components/Footer/Footer";
import Films from "./components/Films/Films";
import themeContext from "./context/ThemeContext";
import { useState } from "react";
import FilmsDetails from "./components/FilmDetails/FilmsDetails";

function App() {
  const [theme, setTheme] = useState("light");

  function handleClickTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "yellow" : "light"));
    console.log(theme);
  }
  return (
    <themeContext.Provider value={theme}>
      <Router>
        <div className={theme}>
          <Navigation />
          <div className="blocChange text-center">
            <button onClick={handleClickTheme} className="btnChange">
              Change la couleur du texte
            </button>
          </div>
          <Routes>
            <Route exact path="/" Component={Accueil} />
            <Route exact path="/Accueil" Component={Accueil} />
            <Route exact path="/Home" Component={Home} />
            <Route path="/CommentsSection" Component={CommentsSection} />
            <Route path="/CharacterProfile" Component={CharacterProfile} />
            <Route path="/EpisodeDetails" Component={EpisodeDetails} />
            <Route path="/Season1" Component={Season1} />
            <Route path="/Season2" Component={Season2} />
            <Route path="/Season3" Component={Season3} />
            <Route path="/Personnages" Component={Personnages} />
            <Route path="/PlaceList" Component={PlaceList} />
            {/* <Route path="/PlaceDetail" Component={PlaceDetail} /> */}
            <Route path="/place/:id" Component={PlaceDetail} />
            <Route path="Boutique" Component={Boutique} />
            <Route path="Films" Component={Films} />
            <Route path="/films/:id/:title?" Component={FilmsDetails} />
            <Route path="*" element={<ErrorPage />} />

            {/* Ajoutez les autres routes ici */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </themeContext.Provider>
  );
}

export default App;
