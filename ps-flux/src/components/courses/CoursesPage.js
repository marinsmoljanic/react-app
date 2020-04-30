import React from "react";
import { getCourses } from "../../api/courseApi";
import { Link } from "react-router-dom";

class CoursesPage extends React.Component {
  // ovdje je dobar primjer lifecyclea constructor -> render -> componentDidMount
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
  }
  componentDidMount() {
    getCourses().then((courses) => {
      this.setState({ courses: courses });
    });
  }

  render() {
    return (
      <>
        <br></br>
        <div className="container page-content">
          <div className="row">
            <div className="col-12">
              <table className="table table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th>Title</th>
                    <th>Author ID</th>
                    <th>Category</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.courses.map((course) => {
                    return (
                      <tr key={course.id}>
                        <td>
                          <Link to={"/course/" + course.slug + "/" + course.id}>
                            {course.title}
                          </Link>
                        </td>
                        <td>{course.authorId}</td>
                        <td>{course.category}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-sm-10"></div>
            <div className="col-md-2 col-sm-2">
              <Link className="btn btn-primary add-course-button" to="/course">
                Add
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CoursesPage;
