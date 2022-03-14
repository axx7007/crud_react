import React from "react";
import "./state.css";
var data = [
  { id: 1, name: "WebBro", surname: "Abduvaxobov", age: 24 },
  { id: 2, name: "WebBind", surname: "Pistonchiyev", age: 22 },
  { id: 3, name: "WebBrain", surname: "Academy", age: 21 },
  { id: 4, name: "WebBook", surname: "App", age: 20 },
  { id: 5, name: "WebBucket", surname: "Abduvaxobov", age: 29 },
];
class State extends React.Component {
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
    const Selected = (e) => {
      var variable = e.target.value;
      var selection = data.map((item, index) => {
        return { [variable]: item[variable] };
      });
      this.setState({
        data: selection,
        newData: [...selection],
        var: variable,
      });
    };
    const onChange = (e) => {
      var filter = this.state.newData.filter((item, index) =>
        item[this.state.var].toString().includes(e.target.value)
      );
      this.setState({ data: filter });
    };
    const onDelete = (e) => {
      var del = this.state.data.filter((item, index) => index !== e);
      this.setState({
        data: del,
      });
    };
    const Add = (e) => {
      if (
        this.state.nsme.length &&
        this.state.surname.length &&
        this.state.age.length &&
        this.state.id.length
      ) {
        var AddingData = {
          id: this.state.id,
          name: this.state.name,
          surname: this.state.surname,
          age: this.state.age,
        };

        this.setState({
          data: [...this.state.data, AddingData],
          id: "",
          name: "",
          surname: "",
          age: "",
        });
      } else {
        alert("Iltimos formalarni to'ldiring");
      }
    };
    const onEdit = (val) => {
      this.setState({ selected: val });
      console.log(this.state.selected.id === val.id);
    };
    return (
      <div className="wrapper">
        <div>
          <input
            type="text"
            placeholder="Id"
            value={this.state.id}
            onChange={(e) => this.setState({ id: e.target.value })}
          />
          <input
            type="text"
            value={this.state.name}
            placeholder="Name"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <input
            type="text"
            value={this.state.surname}
            placeholder="Surname"
            onChange={(e) => this.setState({ surname: e.target.value })}
          />
          <input
            type="text"
            value={this.state.age}
            placeholder="Age"
            onChange={(e) => this.setState({ age: e.target.value })}
          />
          <button onClick={Add}>Add</button>
        </div>
        <select onChange={Selected}>
          <option value="id">Id</option>
          <option value="name">Name</option>
          <option value="surname">Surname</option>
          <option value="age">Age</option>
        </select>
        <input type="text" onChange={onChange} />
        {this.state.data.map((value, index) => {
          return (
            <div key={value.id} className="container">
              <h5>
                {value.id}-Name: {value.name} Surname:
                {value.surname} Age: {value.age}
              </h5>
              <div className="btn-wrapper">
                {this.state.selected?.id === value.id ? (
                  <button onClick={() => this.setState({ selected: null })}>
                    Cancel
                  </button>
                ) : (
                  <button onClick={() => onEdit(value)}>Edit</button>
                )}

                <button onClick={(e) => onDelete(index)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default State;
