const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

// App MUST be capitalized
const App = () => {
  // React.createElement(arg1, arg2, arg3)
  // arg1 type of html element, arg2 (null or object with attributes handing down i.e. id:"", className=""), arg3 is children
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Mina",
      animal: "Cat",
      breed: "Tortoiseshell",
    }),
    React.createElement(Pet, {
      name: "Quade",
      animal: "Cat",
      breed: "Orangeboi",
    }),
    React.createElement(Pet, {
      name: "Spooder",
      animal: "Spider",
      breed: "Yellowsac",
    }),
  ]);
};

//grabs root div
const container = document.getElementById("root");
//establishes said div as React Root. replaces: [ReactDOM.render(container, <App />)]
const root = ReactDOM.createRoot(container);
//instructs root to render our base-level App component. Can be reused to rerender your entire app with a simple root.render call
root.render(React.createElement(App));
