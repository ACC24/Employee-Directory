import React from "react";
import moment from "moment";
import "./style.css";

function Table({ employees, sortingFunctionHandler }) {

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col" className="nameCol"onClick={() => sortingFunctionHandler()} >Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, i) =>
          <tr key={i}>
            <td><img alt="Employee" src={employee.picture.thumbnail} className="img-fluid" /></td>
            <td>{employee.name.first} {employee.name.last}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>{moment(employee.dob.date).calendar()}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Table;
