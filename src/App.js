import {Route, Switch} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import ResusltsPage from "./pages/ResultsPage/ResultsPage";

function App() {
  return (
    <div>
    <Switch>
      <Route exact path="/">
      <HomePage />
      </Route>
      <Route path="/harshapulikollu">
      <ResusltsPage />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
