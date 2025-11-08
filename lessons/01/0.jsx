// Пример CodePen (Babel) - в реале не всё как тут (Сам импортирует React)

class Hello extends React.Component {
  render() {
    return <div>Hello!</div>;
  }
}

const mountNode = document.getElementById("react-root");  JS тема
const root = ReactDOM.createRoot(mountNode);
root.render(<Hello />);

// Базовый компонент JSX

import React from "react";
import ReactDOM from "react-dom/client";

export default class Hello extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}

// Любой React-component возвращает кусок DOM (виртуальный)

// Пример JSX элемент
const vdom = (
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Card title</h4>
      <p className="card-text">my text</p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
);
