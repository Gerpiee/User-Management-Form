import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useState } from "react";

const EditForm = ({ theEmployee }) => {
  const { updateEmployee } = useContext(EmployeeContext);

  /*1 Bu kısımda aldığımız çalışan bilgisini buraya getirdik ve employee'nin içerisine Attık */

  const employee = theEmployee;

  /*2 Sonrasında Bu çalışanlarımızın öncelikle id değerine sonrada tüm değerlerine eriştik bunun sebebi ise bizim güncelle formumuz açıldığında bu bilgilerin yazılı bir şekilde gelmesini sağlamak */

  const id = employee.id;

  const [name, SetName] = useState(employee.name);
  const [lastName, SetLastName] = useState(employee.lastName);
  const [age, SetAge] = useState(employee.age);
  const [phone, SetPhone] = useState(employee.phone);
  // 4 - son olarak da updatedEmployee de bütün değerlerimizi topluyoruz güncelleme işlemi sonrasında en son yazdırıyoruz
  const updatedEmployee = { id, name, lastName, age, phone };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(id, updatedEmployee);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name *"
          name="name"
          value={name}
          //3 Her hangi bir değişiklik olursa bunları yakalamak için onChange leri yazdık
          onChange={(e) => SetName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="text"
          placeholder="lastName *"
          name="lastName"
          value={lastName}
          //3 Her hangi bir değişiklik olursa bunları yakalamak için onChange leri yazdık
          onChange={(e) => SetLastName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="text"
          placeholder="age *"
          name="age"
          value={age}
          //3 Her hangi bir değişiklik olursa bunları yakalamak için onChange leri yazdık
          onChange={(e) => SetAge(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          //3 Her hangi bir değişiklik olursa bunları yakalamak için onChange leri yazdık
          onChange={(e) => SetPhone(e.target.value)}
        />
      </Form.Group>

      <Button variant="success" type="submit" block>
        Güncelle
      </Button>
    </Form>
  );
};

export default EditForm;
