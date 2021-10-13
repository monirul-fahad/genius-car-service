import React from "react";
import Expart from "../Expart/Expart";

import mechanic1 from "../../../images/mechanic/mechanic-1.jpg";
import mechanic2 from "../../../images/mechanic/mechanic-2.jpg";
import mechanic3 from "../../../images/mechanic/mechanic-3.jpg";
import mechanic4 from "../../../images/mechanic/mechanic-4.jpg";

const experts = [
  {
    img: mechanic1,
    name: "Andrew Smith",
    expertize: "-Engine Expert-",
  },
  {
    img: mechanic2,
    name: "John Abraham",
    expertize: "-Polish Expert-",
  },
  {
    img: mechanic3,
    name: "Zakaria Jack",
    expertize: "-Coloring Expert-",
  },
  {
    img: mechanic4,
    name: "Sakib Anderson",
    expertize: "-Alrounder Expert-",
  },
];

const Exparts = () => {
  return (
    <div className="container" id="experts">
      <h2 className="text-primary mt-5">Our Experts</h2>
      <div className="row">
        {experts.map((expert) => (
          <Expart key={expert.name} expert={expert}></Expart>
        ))}
      </div>
    </div>
  );
};

export default Exparts;
