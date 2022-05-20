import React from "react";
import JsonData from "./data.json";
import "./dashboard.css";
import { idx } from "./contact";

function Report() {
  return (
    <div className="tableA">
      {JsonData.filter((Liste) => Liste.id === idx).map((filtre) => (
        <div className="fullA">
          <div className="Name">
            <p>
              <div className="name">{filtre.name}</div>
              <div className="surname">{filtre.surname}</div>
            </p>
          </div>

          <div className="Surname">
            {filtre.details.map((sub) => (
              <div className="SurnameD">
                <div>{filtre.fonction}</div>

                <div className="info">{sub.info}</div>
                <div data-status={sub.statut} className="statut">
                  {sub.statut}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Report;
