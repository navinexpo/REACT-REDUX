import "./App.css";
// import Main from "./components/Main";
import Header from "./components/Header";
import { addToCart } from "./redux/action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const product = {
    name: "I Phone",
    type: "mobile",
    price: 10202,
    color: "red",
  };
  return (
    <div className="App">
      <Header />
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
}

export default App;
