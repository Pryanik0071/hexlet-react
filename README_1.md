# Imports

import React from 'react'
import ReactDOM from 'react-dom/client'

# Components

export default class Hello extends React.Component {
    render() {
        return <div>Hello</div>
    }
}

# Mount

const root = ReactDOM.createRoot(document.getElementById('react-root'))
root.render(<Hello />)

# JSX

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
)
