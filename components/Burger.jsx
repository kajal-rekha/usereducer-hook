import { useReducer } from "react";

// ///////////////// first example//////////////
// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "buy":
//       if (state <= 0) return null;
//       return state - 1;
//     case "restock":
//       if (state === 0) return state + 20;
//       return null;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

// const Burger = () => {
//   const [numOfBurger, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <h1>Total Burgers: {numOfBurger}</h1>
//       <button onClick={() => dispatch("buy")}>Buy Burger</button>
//       <button onClick={() => dispatch("restock")}>Restock Burger</button>
//       <button onClick={() => dispatch("reset")}>Reset Burger</button>
//     </div>
//   );
// };

///////////////////////////////////////////

///////////// second example//////////////////////

const initialState = {
  numOfBurger: 20,
  numOfPizza: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "buy":
      return {
        ...state,
        numOfBurger: state.numOfBurger - action.payload,
      };
    case "restock":
      return {
        ...state,
        numOfBurger: state.numOfBurger - action.payload,
      };
    case "reset":
      return {
        ...state,
        numOfBurger: action.payload,
      };
    default:
      return state;
  }
};

const Burger = () => {
  const [fastFoods, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Total Burgers: {fastFoods.numOfBurger}</h1>
      <button onClick={() => dispatch({ type: "buy", payload: 3 })}>
        Buy Burger
      </button>
      <button onClick={() => dispatch({ type: "restock", payload: 100 })}>
        Restock Burger
      </button>
      <button onClick={() => dispatch({ type: "reset", payload: 0 })}>
        Reset Burger
      </button>
    </div>
  );
};

export default Burger;
