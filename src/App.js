import './App.css';
import { Router } from "@reach/router"
import Home from './components/Home'
import TopRight from './components/TopRight';
import Colors from './components/Colors';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <TopRight path="/:id" />
        <Colors path="/:id/:color/:bc" />

      </Router>
    </div>
  );
}

export default App;
