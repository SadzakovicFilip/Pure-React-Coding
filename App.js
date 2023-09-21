const Person = (props) => {
  return React.createElement(`div`, {}, [
    React.createElement(`h1`, {}, props.name),
    React.createElement(`p`, {}, props.ocupation),
  ]);
};

const App = () => {
  return React.createElement(`div`, {}, [
    React.createElement(`h1`, { className: "title" }, "React is Rendered"),
    React.createElement(
      Person,
      { name: `Filip`, ocupation: `Programmer` },
      null
    ),
    React.createElement(Person, { name: `Maja`, ocupation: `Designer` }, null),
    React.createElement(Person, { name: `Ljilja`, ocupation: `Doctor` }, null),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById(`root`));
