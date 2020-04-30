import React from "react";

class StateCrud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Crud example",
      action: "create-delete",
      index: 0,
      dataList: [],
    };
  }

  componentDidMount() {
    this.refs.name.focus();
  }

  formSubmit = (e) => {
    e.preventDefault();

    let dataList = this.state.dataList;
    let name = this.refs.name.value;
    let surname = this.refs.surname.value;

    if (this.state.action === "create-delete") {
      let data = {
        name,
        surname,
      };
      dataList.push(data);
    } else {
      console.log("Etered here");
      let index = this.state.index;
      dataList[index].name = name;
      dataList[index].surname = surname;
    }

    this.setState({
      dataList: dataList,
      action: "create-delete",
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  };

  formRemove = (i) => {
    let dataList = this.state.dataList;
    dataList.splice(i, 1);
    this.setState({
      dataList: dataList,
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  };

  formEdit = (i) => {
    console.log(i);
    let data = this.state.dataList[i];
    this.refs.name.value = data.name;
    this.refs.surname.value = data.surname;

    this.setState({
      action: "update",
      index: i,
    });

    this.refs.name.focus();
  };

  render() {
    let dataList = this.state.dataList;
    return (
      <div className="page-content state-crud">
        <header>
          <h2>STATE variable CRUD</h2>

          <form ref="myForm" className="myForm">
            <input
              type="text"
              ref="name"
              placeholder="Your name"
              className="formField"
            />{" "}
            <input
              type="text"
              ref="surname"
              placeholder="Your surname"
              className="formField"
            />{" "}
            <button
              onClick={(e) => this.formSubmit(e)}
              className="myButton btn btn-primary"
            >
              Submit
            </button>
          </form>
          <pre>
            {dataList.map((data, i) => (
              <li key={i} className="myList oneli">
                {i + 1}) {data.name} <b>;</b> {data.surname}{" "}
                <button
                  onClick={() => this.formEdit(i)}
                  className="myListButton btn btn-primary"
                >
                  Update
                </button>{" "}
                <button
                  onClick={() => this.formRemove(i)}
                  className="myListButton btn btn-danger"
                >
                  Delete
                </button>
              </li>
            ))}
          </pre>
        </header>
      </div>
    );
  }
}

export default StateCrud;
