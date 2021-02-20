import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import Project from 'src/views/Project';
import SignUp from 'src/views/SignUp';
import Main from 'src/views/main/index';

export default () =>(
        <Router>
            <Route path="/" exact component={Main}/>
            <Route path="/project" component={Project}/>
            <Route path="/signup" component={SignUp}/>
        </Router>
)
