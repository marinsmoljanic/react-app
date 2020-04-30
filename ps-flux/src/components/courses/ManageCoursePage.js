import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../../api/courseApi";
import { toast } from "react-toastify";

const ManageCoursePage = (props) => {
  // hook primjer
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  // ovdje definiramo kod koji ce se izvrsiti kada se komponenta loada
  // useEffect - brijem da se mora definirat dependency array kao druga varijabla
  //
  useEffect(() => {
    const slug = props.match.params.slug; // iz patha '/courses/:slug'
    if (slug) {
      courseApi.getCourseBySlug(slug).then((_course) => setCourse(_course));
    }
  }, [props.match.params.slug]);

  // Event se automatski dobiva od browsera

  function handleChange(event) {
    // [varijabla] -> Computed Property se zove ova sintaksa. Postavlja se naziv s obzirom na vrijednost varijable
    const updatedCourse = {
      ...course,
      [event.target.name]: event.target.value,
    };
    setCourse(updatedCourse);
  }

  function formIsValid() {
    const _errors = {};

    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author ID is required";
    if (!course.category) _errors.category = "Category is required";

    // barata sa kopijom koju onda u jednom koraku spremi u state
    setErrors(_errors);
    // Form is valid ako error objekt nema nekakvih vrijednosti
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    // preventDefault is preventing page from posting back to server. To je ono sto sam i mislio jer submitanje zelimo zadrzati na klijentskoj strani
    event.preventDefault();
    // cancle ako forma nije validna
    if (!formIsValid()) return;
    // nove evente spremamo u db.json file koji nam preko mock APIa sluzi kao baza
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course saved.");
    });
  }

  return (
    <>
      <br></br>
      <h2 className="text-align-center page-content">Manage Course</h2>
      <br></br>

      {props.match.params.slug}
      {props.match.params.id}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <CourseForm
              errors={errors}
              course={course}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageCoursePage;
