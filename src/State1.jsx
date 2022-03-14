import React from "react";
import "./state1.css";
var data = [
  { id: 1, name: "WebBro", surname: "Abduvaxobov", age: 24 },
  { id: 2, name: "WebBind", surname: "Pistonchiyev", age: 22 },
  { id: 3, name: "WebBrain", surname: "Academy", age: 21 },
  { id: 4, name: "WebBook", surname: "App", age: 20 },
  { id: 5, name: "WebBucket", surname: "Abduvaxobov", age: 29 },
];
class State1 extends React.Component {
  state = {
    data: data,
    newData: data,
    var: "",
    id: "",
    name: "",
    surname: "",
    age: "",
    selected: null,
  };
  render() {
    const Selection = (e) => {
      var variable = e.target.value;
      var selected = this.state.data.map((value, index) => {
        return { [variable]: value[variable] };
      });
      console.log(selected);
      this.setState({
        newData: [...selected],
        var: variable,
      });
    };
    const Search = (e) => {
      var searched = data.filter((value, index) =>
        value[this.state.var].toString().includes(e.target.value)
      );
      this.setState({ data: searched });
    };
    const onAdd = () => {
      var AddingData = {
        id: this.state.id,
        name: this.state.name,
        surname: this.state.surname,
        age: this.state.age,
      };
      this.setState({
        data: [...this.state.data, AddingData],
      });
    };
    const onDelete = (del) => {
      var filtered = this.state.data.filter((value, index) => value.id !== del);
      this.setState({
        data: [...filtered],
      });
    };
    const onEdit = (value) => {
      this.setState({ selected: value });
    };
    const onEditChange = ({ target }) => {
      const { name, value } = target;
      const newdat = { ...this.state.selected, [name]: value };
      this.setState({ selected: newdat });
    };
    const onSave = (item) => {
      var res = this.state.data.map((value, index) =>
        this.state.selected?.id === value.id ? this.state.selected : value
      );
      this.setState({ data: res, selected: null });
    };

    return (
      <div className="container">
        <div className="header">
          <div className="add">
            <input
              className="input"
              onChange={(e) => this.setState({ id: e.target.value })}
              placeholder="Id"
              type="number"
            />
            <input
              className="input"
              onChange={(e) => this.setState({ name: e.target.value })}
              placeholder="Name"
              type="text"
            />
            <input
              className="input"
              onChange={(e) => this.setState({ surname: e.target.value })}
              placeholder="Surname"
              type="text"
            />
            <input
              className="input"
              onChange={(e) => this.setState({ age: e.target.value })}
              placeholder="Age"
              type="number"
            />
            <button onClick={onAdd}>Add</button>
          </div>
          <div className="search">
            <select onChange={Selection}>
              <option value="id">ID</option>
              <option value="name">Name</option>
              <option value="surname">Surname</option>
              <option value="age">Age</option>
            </select>
            <input type="text" className="inputSearch" onChange={Search} />
          </div>
        </div>

        {this.state.data.map((value, index) => {
          return (
            <div className="wrapper" key={value.id}>
              <div className="id">
                <h4>{value.id}</h4>
              </div>
              {this.state.selected?.id === value.id ? (
                <>
                  <div className="name">
                    <input
                      onChange={onEditChange}
                      name="name"
                      className="editname"
                      value={this.state.selected.name}
                      type="text"
                    />
                  </div>
                  <div className="surname">
                    <input
                      onChange={onEditChange}
                      name="surname"
                      className="editsurname"
                      value={this.state.selected.surname}
                      type="text"
                    />
                  </div>
                  <div className="age">
                    <input
                      onChange={onEditChange}
                      name="age"
                      className="editage"
                      value={this.state.selected.age}
                      type="number"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="name">
                    <h4>{value.name}</h4>
                  </div>
                  <div className="surname">
                    <h4>{value.surname}</h4>
                  </div>
                  <div className="age">
                    <h4>{value.age}</h4>
                  </div>
                </>
              )}
              {this.state.selected?.id === value.id ? (
                <>
                  <div className="btns">
                    <button className="editbtn" onClick={() => onSave(value)}>
                      Save
                    </button>
                  </div>
                  <div className="btns">
                    <button
                      className="cancelbtn"
                      onClick={() => this.setState({ selected: null })}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <div className="btns">
                  <button className="editbtn" onClick={() => onEdit(value)}>
                    Edit
                  </button>
                </div>
              )}

              <div className="delete">
                <button
                  className="btnDelete"
                  onClick={() => onDelete(value.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default State1;
