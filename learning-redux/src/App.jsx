import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementBy,
  increment,
  incrementBy,
} from "./redux/features/counterSlice";

const App = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.value);

  const [incrementNum, setIncrementNum] = useState(5);
  const [decrementNum, setDecrementNum] = useState(5);

  return (
    <div>
      <h1>{count}</h1>

      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>

      <input
        type="number"
        value={incrementNum}
        onChange={(e) => setIncrementNum(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(incrementBy(Number(incrementNum)));
        }}
      >
        Increment by
      </button>

      <input
        type="number"
        value={decrementNum}
        onChange={(e) => setDecrementNum(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(decrementBy(Number(decrementNum)));
        }}
      >
        Decrement by
      </button>
    </div>
  );
};

export default App;
