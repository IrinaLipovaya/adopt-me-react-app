import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "something-important" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Papper",
      animal: "Bird",
      breed: "Cockatel",
    }),
    React.createElement(Pet, { name: "Barsik", animal: "Cat", breed: "Mixed" }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
