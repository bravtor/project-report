import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/home";
import About from "./component/item";
import Contact from "./component/contact";
import Stat from "./component/stat";
import Report from "./component/report";
import ReportId from "./component/ReportId";
import JsonData from "./component/data.json";
import { FaUserFriends } from "react-icons/fa";
import { FaFileSignature } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <Profils />
            <hr />

            <div className="SubtitleMenu">Générales </div>
            <ul className="list">
              <li>
                <Link to="/contact" className="IconMenu">
                  <FaUserFriends />
                  teams
                </Link>
              </li>
              <li>
                <Link to="/stat" className="IconMenu">
                  <FaFileSignature />
                  stats
                </Link>
              </li>
              <li>
                <Link to="/about" className="IconMenu">
                  <FaClipboardList />
                  Items
                </Link>
              </li>
              <li>
                <Link to="/about" className="IconMenu">
                  <FaMap />
                  Drawing
                </Link>
              </li>
            </ul>

            <div className="SubtitleMenu">Vos informations </div>
            <ul className="list">
              <li>
                <div className="IconMenu">
                  <div className="iconFa">
                    <FaFolderOpen />
                  </div>
                  <Link to="/reportid">Report</Link>
                </div>
              </li>
            </ul>
          </div>
          <div className="Route">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/contact" element={<Contact />}></Route>
              <Route exact path="/report" element={<Report />}></Route>
              <Route exact path="/stat" element={<Stat />}></Route>
              <Route exact path="/reportid" element={<ReportId />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}
function Profils() {
  return (
    <div className="HeaderTable">
      {JsonData.filter((Liste) => Liste.id === 2).map((filtre) => (
        <div className="ProfilHeader">
          <img src={filtre.PicProfil} width="70" height="70" alt="" />
          <div className="ProfilName">
            <div className="name">{filtre.name}</div>
            <div className="surname">{filtre.surname}</div>
          </div>
        </div>
      ))}
    </div>
  );
}



export default App;
