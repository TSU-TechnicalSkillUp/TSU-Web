import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "src/views/main";
import Project from "./views/Project";
import SignUp from "./views/SignUp";

function App() {
  return (
    <Router>
      <Route path="/" component={Main} />
      <Route path="/project" component={Project} />
      <Route path="/signup" component={SignUp} />
    </Router>
  );
}

export default App;
