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
      <Route exact path="/bio">
      <ResusltsPage />
      </Route>
      <Route>
        <div>oops</div>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
