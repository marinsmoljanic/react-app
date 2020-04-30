import React from "react";
import { connect } from "react-redux";
import * as courseActions from "./actions/CourseActions";
import PropTypes from "prop-types";

class ReduxCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        title: "",
      },
    };
    // nije mi bas jasno ovo
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-align-center">
            <form onSubmit={this.handleSubmit}>
              <h3>Add Course</h3>
              <input
                type="text"
                onChange={this.handleChange}
                value={this.state.course.title}
              />{" "}
              <input type="submit" value="Save" className="btn btn-primary" />
              <br></br>
              <hr></hr>
              <p>Lista courseva iz redux storea:</p>
              {this.props.courses.map((_course) => (
                <div key={_course.title}>{_course.title}</div>
              ))}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// ocekujemo da ce dispatch biti proslijeden ReduxCourses komponenti
ReduxCourses.propTypes = {
  courses: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

// koji dio statea exposamo komponenti putem propsa
// ownProps - lets us access props that are attached to this component
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses,
  };
}

// mapDispatchToProps - koje akcije zelimo exposeati na komponent: opcionalni je parametar

// connect spaja komponente sa reduxom
const connectedStateAndProps = connect(mapStateToProps);
export default connectedStateAndProps(ReduxCourses);
