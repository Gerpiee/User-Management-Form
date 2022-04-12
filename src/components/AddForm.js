import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useState } from "react";
const AddForm = () => {
  const { addEmployee } = useContext(EmployeeContext);
  // Her bir form elemanını ayrı ayrı state olarak aldık yani her işlemimizde oradaki form elemanımızın değerini değiştiriyoruz

  //   const { name, setName } = useState("");
  //   const { lastName, setLastName } = useState("");
  //   const { age, setAge } = useState("");
  //   const { phone, setPhone } = useState("");

  const [newEmployee, setNewEmployee] = useState({
    // Bu kısımda başlangıç değerlerini veriyoruz
    name: "",
    lastName: "",
    age: "",
    phone: "",
  });
  const { name, lastName, age, phone } = newEmployee;
  const onInputChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(name, lastName, age, phone);
  };
  return (
    <Form onSubmit={handleSubmit}>
      {/* Forumum onsubmit olduğu zaman handleSubmit Fonksiyonunu çalıştır*/}

      <Form.Group>
        <Form.Control
          type="Text"
          placeholder="Ad *"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)} //Bu kısımda biz textinputumuza örneğin ahmet değerini girdik Girdiğimiz değer artık name state'imizin değerini oluşturdu vekısmı artık "ahmet"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="Text"
          placeholder="Soyad *"
          name="lastName"
          value={lastName}
          onChange={(e) => onInputChange(e)} //Bu kısımda biz textinputumuza örneğin ahmet değerini girdik Girdiğimiz değer artık name state'imizin değerini oluşturdu ve kısmı artık "ahmet"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="Text"
          placeholder="Yaş *"
          name="age"
          value={age}
          onChange={(e) => onInputChange(e)} //Bu kısımda biz textinputumuza örneğin ahmet değerini girdik Girdiğimiz değer artık name state'imizin değerini oluşturdu ve kısmı artık "ahmet"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="Text"
          placeholder="Telefon no *"
          name="phone"
          value={phone}
          onChange={(e) => onInputChange(e)} //Bu kısımda biz textinputumuza örneğin ahmet değerini girdik Girdiğimiz değer artık name state'imizin değerini oluşturdu vekısmı artık "ahmet"
          required
        />
      </Form.Group>
      <Button variant="succes" type="submit" block>
        Yeni Kullanıcı Ekle
      </Button>
    </Form>
  );
};
export default AddForm;
