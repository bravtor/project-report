import React from "react";
import item from "./item.json";
import "./Style/Item.css";
import Header from "./Header";

function About() {
  return (
    <div className="plein">
      <Header name="Items" />
      <div className="Total">
        <div className="tableB">
          {item.map((filtre) => (
            <div className="fullB">
              <div className="NameB">
                <div className="Item name">{filtre.Name}</div>
                <div className="Item surname">{filtre.Type}</div>

                <hr />
              </div>
            </div>
          ))}
        </div>
        <div className="result">
          <FilterItem />
        </div>
      </div>
    </div>
  );
}



function FilterItem() {
  return (
    <div className="">
      {item
        .filter((Liste) => Liste.id === 2)
        .map((filtre) => (
          <div className="">
            <div className="">
              <p>
                <div className="Item">
                  <div className="TitleItem">Type</div>
                  <div className="TitleRes">{filtre.Name}</div>
                </div>
                <div className="Item">
                  <div className="TitleItem">Tag</div>
                  <div className="TitleRes">{filtre.Type}</div>
                </div>
                <div className="Item">
                  <div className="TitleItem">Name</div>
                  <div className="TitleRes">{filtre.Tag}</div>
                </div>
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
export default About;
