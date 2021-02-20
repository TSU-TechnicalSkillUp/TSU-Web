import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";

import Project from '../views/Project';
import SignUp from '../views/SignUp';
export default () =>(
        <Router>
            {/* <Route path="/main" component={}/> */}
            <Route path="/project" component={Project}/>
            <Route path="/signup" component={SignUp}/>
        </Router>
)