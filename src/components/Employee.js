const Employee = ({ employees }) => {
  return (
    <>
      {employees.map((employee) => (
        <tr key={employee.id}>
          <td>{employee.name}</td>
          <td>{employee.lastName}</td>
          <td>{employee.age}</td>
          <td>{employee.phone}</td>
          <td>
            <a href="#editEmployeeModal" className="edit" data-toggle="modal">
              <i className="material-icons" data-toggle="tooltip" title="Edit">
                &#xE254;
              </i>
            </a>
            <a
              href="#deleteEmployeeModal"
              className="delete"
              data-toggle="modal"
            >
              <i
                className="material-icons"
                data-toggle="tooltip"
                title="Delete"
              >
                &#xE872;
              </i>
            </a>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Employee;
