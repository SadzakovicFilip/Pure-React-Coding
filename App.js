const Person = (props) => {
  return React.createElement(`div`, {}, [
    React.createElement(`h1`, {key:1}, props.name),
    React.createElement(`p`, {key:2}, props.ocupation),
  ]);
};

const App = () => {
  return React.createElement(`div`, {}, [
    React.createElement(`h1`, { className: "title",key:3 }, "React is Rendered"),
    React.createElement(
      Person,
      { name: `Filip`, ocupation: `Programmer`, key:4 },
      null
    ),
    React.createElement(Person, { name: `Maja`, ocupation: `Designer`,key:5 }, null),
    React.createElement(Person, { name: `Ljilja`, ocupation: `Doctor`,key:6 }, null),
    React.createElement(Person, { name: `Vera`, ocupation: `Lawyer`,key:7 }, null),
  ]);
};

const root = ReactDOM.createRoot(document.getElementById(`root`))
root.render(React.createElement(App))