import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Components/Navigation";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
      </div>
    </BrowserRouter>
  );
}
