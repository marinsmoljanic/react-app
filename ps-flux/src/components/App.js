import React from "react";
import HomePage from "./home/HomePage";
import StateCrud from "./statecrud/StateCrud";
import Header from "./common/Header";
import CoursesPage from "./courses/CoursesPage";
import NotFoundPage from "./NotFoundPage";
import { Route, Switch, Redirect } from "react-router-dom";
import ManageCoursePage from "./courses/ManageCoursePage";
import ReduxCourses from "./redux/ReduxCourses";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends React.Component {
  render() {
    // redoslijed "course" je bitan jer se ide slijedom od specificnijeg patha ka opcenitijem
    return (
      <div className="cotainer-fluid">
        <ToastContainer autoClose={3000} hideProgressBar />
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/statecrud" component={StateCrud} />
          <Route path="/course/:slug/:id" component={ManageCoursePage} />
          <Route path="/course" component={ManageCoursePage} />
          <Redirect from="/about-page" to="about" />
          <Route path="/reduxcourses" component={ReduxCourses} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
