import React from "react";

import JsonData from "./data.json";
import { Link } from "react-router-dom";
import Header from "./Header";

import "./dashboard.css";

export var idx = 1;

function UserFile() {
  return (
    <div className="table">
       <Header name="Teams" />
      <div className="OptionFilter">
        <SearchProfil />
        <FlavorForm />
      </div>

      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Team</th>
            <th>Fonction</th>
            <th>Rapport</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>
          {JsonData.map((filtre) => (
            <tr>
              <td>
                <div className="picA">
                  
                  <img src={filtre.PicProfil} width="60" height="60" alt="" />
                  
                  <div id="picpro"></div>
                  <div className="name">{filtre.name}
                  <div className="surname">{filtre.surname}</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="team">{filtre.team}</div>
              </td>

              <td>
                <div>{filtre.fonction}</div>
              </td>
              <td>
                <div className="consulter">
                  <Link to="/report">Voir</Link>
                </div>
              </td>
              <td>
                <div>{filtre.email}</div>
              </td>
              <td>
                <div>{filtre.phone}</div>
              </td>
              <td>
                <div className="consulter">
                  <Link to="/report">Detail</Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <UserFile />
    </div>
  );
}

function SearchProfil() {
  return (
    <div>
      <div className="filter">
      <div>
        <label htmlFor="site-search">Search the site:</label>
        <form>
          <label>
            <input type="text" name="name" placeholder="search" />
          </label>
        </form>
        <div></div>
      </div>
      </div>
    </div>
  );
}

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Votre parfum favori est : " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      
      <form onSubmit={this.handleSubmit}>
        <div className="filter">
        <label>
          Select the team :
          </label>
          
          <select value={this.state.value} onChange={this.handleChange}>
          <option value=""  defaultValue>Choose a drink</option>
            <option value="grapefruit">Pamplemousse</option>
            <option value="lime">Citron vert</option>
            <option value="coconut">Noix de coco</option>
            <option value="mango">Mangue</option>
          </select>
      
        </div>
      </form>
     
    );
  }
}

export default Contact;
