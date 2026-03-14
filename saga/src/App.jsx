import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counterSlice";
import "./index.css";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleAsyncIncrement = () => {
    dispatch({ type: "counter/asyncIncrement" });
  };

  return (
    <div className="app">
      <div className="counter-container">
        <h1 className="counter-title">Redux Saga Counter</h1>
        <div className="counter-display">
          <span className="counter-value">{count}</span>
        </div>
        <div className="button-group">
          <button
            className="btn btn-increment"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <button
            className="btn btn-decrement"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <button className="btn btn-async" onClick={handleAsyncIncrement}>
            Async +
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
