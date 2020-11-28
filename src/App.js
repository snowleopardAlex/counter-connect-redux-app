import React from "react";
import {connect} from "react-redux";
import {increment, decrement}  from "./redux";
import './App.css';

function App(props) {
  return (
    <div className="App">
       <h1>{props.count}</h1>
       <button onClick={props.decrement}>-</button>
       <button onClick={props.increment}>+</button>
    </div>
  );
}

// return an object where the keys are the name of the prop your component wants,
// values are the actual parts of the global state your component wants
function mapStateProps(state) {
  return {
    count: state
  }
}
// ARROW FUNCTION: const mapStateProps = (globalState) => ({count: globalState})
const mapDispatchToProps = {
  increment: increment,
  decrement: decrement
}
// when the keys and values are the same we can shorten:
// const mapDispatchToProps = {
//     increment,
//     decrement 
// }


export default connect(mapStateProps, mapDispatchToProps)(App)

// We can get rid of const mapDispatchToProps const and instead do ARROW FUNCTION:
// export default connect(state => ({count: state}, {increment, decrement})(App)
  