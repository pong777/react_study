import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Welcome(props) {
  return <root>
          <h1>Hello, {props.name}</h1>
          <h1>Hello, {props.id}</h1>
        </root>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" id="saraID"/>
      <Welcome name="Cahal" id="CahalID"/>
      <Welcome name="Edite" id="EditeID"/>
    </div>
  );
}



//const element = <Welcome name="Sara" id="saraID" />;

ReactDOM.render(
  <App /> ,
  document.getElementById('root')
);