import React from "react";
import "./style.css";
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
  };
  render() {
    const onChange = (e) => {
      var variable = e.target.value;
      var selected = data.map((value, index) => {
        return { [variable]: value[variable] };
      });
      this.setState({
        data: selected,
        newData: [...selected],
        var: variable,
      });
    };
    const onChange1 = (e) => {
      var filter = this.state.newData.filter((item) =>
        item[this.state.var].toString().includes(e.target.value)
      );
      this.setState({ data: filter });
    };
    const Delete = (e) => {
      console.log(e);
      var del = this.state.data.filter((item, index) => index !== e);
      this.setState({ data: del });
    };
    const Add = (e) => {
      var newData = {
        id: this.state.id,
        name: this.state.name,
        surname: this.state.surname,
        age: this.state.age,
      };
      console.log(newData);
      var add = this.state.data;
      add.push(newData);
      console.log(add);

      this.setState({ data: add });
    };
    return (
      <div>
        
        <div className="inputwrapper">
          <input
            className="forma"
            placeholder="id"
            name="id"
            type="number"
            onChange={(e) => this.setState({ id: e.target.value })}
          />
          <input
            className="forma"
            placeholder="name"
            name="name"
            type="text"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <input
            className="forma"
            placeholder="surname"
            name="surname"
            type="text"
            onChange={(e) => this.setState({ surname: e.target.value })}
          />
          <input
            className="forma"
            placeholder="age"
            name="age"
            type="text"
            onChange={(e) => this.setState({ age: e.target.value })}
          />
          <button className="AddBtn" onClick={Add}>
            Add
          </button>
        </div>
        <select onChange={onChange}>
          <option value="id">ID</option>
          <option value="name">Name</option>
          <option value="surname">Surname</option>
          <option value="age">Age</option>
        </select>
        <input type="text" onChange={onChange1} />
        {this.state.data.map((value, index) => {
          return (
            <div key={value.id} className="map">
              <h1 className="text">
                {value.id}-Ism:{value.name} Familiya:{value.surname} Yosh
                {value.age}
              </h1>
              <button onClick={(e) => Delete(index)}>Delete</button>
            </div>
          );
        })}
      </div>
    );
  }
}
export default State1;
