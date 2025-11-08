// PROPS
class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

const mountNode = document.getElementById("react-root");
const root = ReactDOM.createRoot(mountNode);
root.render(<HelloMessage name="Jane" />);

// Оператор расширения
const params = {
  className: "row",
  title: "name",
};
const name = "Eva";
const vdom = (
  <div id="container" {...params}>
    Hello, {name}
  </div>
);

// ...params ==

const name = "Eva";
const vdom = (
  <div id="container" className="row" title="name">
    Hello, {name}
  </div>
);

// Props default
const title = this.props.title || "hi!"; // Проблемы производительности?

// Best Practise props default values =>
class Header extends React.Component {
  render() {
    const { text } = this.props;
    return <h1>{text}</h1>;
  }
}

Header.defaultProps = {
  text: "Hello, world!",
};
