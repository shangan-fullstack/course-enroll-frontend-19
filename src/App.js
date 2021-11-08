import React from "react";
import Navbar from "./components/Navbar";
import CourseTable from "./components/CourseTable";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EnrolledCourses from "./views/EnrolledCourses";
import AllCourses from "./views/AllCourses";
import LoginDialog from "./components/LoginDialog";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/enrolled">
            <EnrolledCourses />
          </Route>
          <Route path="/debug">
            <LoginDialog />
          </Route>
          <Route path="/">
            <AllCourses />
          </Route>      
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

